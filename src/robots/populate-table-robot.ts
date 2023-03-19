import { AxiosGateway } from './axios-gateway'
import {
  DynamoDB,
  S3
} from 'aws-sdk'
import { marshall } from '@aws-sdk/util-dynamodb'
import { AxiosResponse } from 'axios'

export class PopulateTableRobot {
  private readonly stage: 'prod' | 'local' = process.env.STAGE as 'prod' | 'local'
  private readonly dynamoDb: DynamoDB
  private readonly s3: S3

  constructor (
    private readonly axiosGateway: AxiosGateway
  ) {
    this.axiosGateway = axiosGateway

    const dynamoDbConfig: DynamoDB.ClientConfiguration = {
      credentials: {
        accessKeyId: this.stage === 'prod' ? String(process.env.AWS_ACCESS_KEY_ID_PROD) : 'fakeAccessKeyId',
        secretAccessKey: this.stage === 'prod' ? String(process.env.AWS_SECRET_ACCESS_KEY_PROD) : 'fakeSecretAccessKey'
      }
    }

    if (this.stage === 'local') {
      dynamoDbConfig.endpoint = 'http://localhost:4566'
    }

    this.dynamoDb = new DynamoDB(dynamoDbConfig)

    this.s3 = new S3({
      credentials: {
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
        secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
      },
      s3ForcePathStyle: true
    })
  }

  async execute (): Promise<void> {
    const exercises: AxiosResponse<Array<{ id: string, target: string, name: string, gifUrl: string, equipment: string, bodyPart: string }>, any> = await this.axiosGateway.get('exercises')
    const cloudFrontUrl = `${process.env.CLOUD_FRONT_BASE_URL}`

    const exercisesWithNewUrl = exercises.data.map(exercise => ({
      ...exercise,
      gifUrl: `${cloudFrontUrl}/${exercise.id}.gif`
    }))

    const gifsFromBucket = await this.s3.listObjectsV2({ Bucket: 'pump-assets' }).promise()

    const idsFromGifs = gifsFromBucket.Contents?.map(({ Key }) => Key?.slice(0, Key.lastIndexOf('.')))

    const onlyExerciseWithGif = exercisesWithNewUrl.filter(exercise => idsFromGifs?.includes(exercise.id))
    for (const exercise of onlyExerciseWithGif) {
      await this.dynamoDb.putItem({
        TableName: 'Exercises',
        Item: marshall({
          id: exercise.id,
          name: exercise.name,
          target: exercise.target,
          equipment: exercise.equipment,
          bodyPart: exercise.bodyPart,
          url: `${cloudFrontUrl}/${exercise.id}.gif`
        })
      }).promise()
    }
  }
}
