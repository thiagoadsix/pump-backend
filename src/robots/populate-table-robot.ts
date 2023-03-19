import { AxiosGateway } from './axios-gateway'
import {
  DynamoDB,
  S3
} from 'aws-sdk'
import { marshall } from '@aws-sdk/util-dynamodb'
import { AxiosResponse } from 'axios'

export class PopulateTableRobot {
  constructor (
    private readonly axiosGateway: AxiosGateway
  ) {
    this.axiosGateway = axiosGateway
  }

  async execute (): Promise<void> {
    const exercises: AxiosResponse<Array<{ id: string, target: string, name: string, gifUrl: string, equipment: string, bodyPart: string }>, any> = await this.axiosGateway.get('exercises')
    const cloudFrontUrl = `${process.env.CLOUD_FRONT_BASE_URL}`
    const dynamoDb = new DynamoDB({
      credentials: {
        accessKeyId: '123',
        secretAccessKey: 'xyz'
      },
      endpoint: 'http://localhost:4566'
    })

    const exercisesWithNewUrl = exercises.data.map(exercise => ({
      ...exercise,
      gifUrl: `${cloudFrontUrl}/${exercise.id}.gif`
    }))

    const s3 = new S3({
      credentials: {
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
        secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
      },
      s3ForcePathStyle: true
    })

    const gifsFromBucket = await s3.listObjectsV2({ Bucket: 'pump-assets' }).promise()

    const idsFromGifs = gifsFromBucket.Contents?.map(({ Key }) => Key?.slice(0, Key.lastIndexOf('.')))

    const onlyExerciseWithGif = exercisesWithNewUrl.filter(exercise => idsFromGifs?.includes(exercise.id))
    for (const exercise of onlyExerciseWithGif) {
      await dynamoDb.putItem({
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
