import { AxiosGateway } from '@gateways/axios/axios-gateway'
import { DynamoDB } from 'aws-sdk'
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
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const cloudFrontUrl = `${process.env.CLOUD_FRONT_BASE_URL}/gifs`
    const dynamoDb = new DynamoDB({
      credentials: {
        accessKeyId: '123',
        secretAccessKey: 'xyz'
      },
      endpoint: 'http://localhost:4566'
    })

    exercises.data.map(exercise => ({
      gifUrl: `${cloudFrontUrl}/${exercise.id}.gif`
    }))

    for (const exercise of exercises.data) {
      console.log({ exercise })

      await dynamoDb.putItem({
        TableName: 'Exercises',
        Item: marshall({
          id: exercise.id,
          target: exercise.target,
          name: exercise.name,
          url: exercise.gifUrl,
          equipment: exercise.equipment,
          bodyPart: exercise.bodyPart,
          createdAt: new Date().toISOString()
        })
      }).promise()
    }
  }
}
