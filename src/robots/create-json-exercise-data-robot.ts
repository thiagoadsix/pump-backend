import { AxiosGateway } from '@gateways/axios/axios-gateway'
import { AxiosResponse } from 'axios'
import { S3 } from 'aws-sdk'

export class CreateJsonExerciseDataRobot {
  constructor (
    private readonly axiosGateway: AxiosGateway
  ) {
    this.axiosGateway = axiosGateway
  }

  async execute (): Promise<void> {
    const exercises: AxiosResponse<Array<{ id: string, gifUrl: string }>, any> = await this.axiosGateway.get('exercises')
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const cloudFrontUrl = `${process.env.CLOUD_FRONT_BASE_URL}/gifs`
    const s3 = new S3({
      credentials: {
        accessKeyId: '123',
        secretAccessKey: 'xyz'
      },
      endpoint: 'http://localhost:4566',
      s3ForcePathStyle: true
    })

    exercises.data.map(exercise => ({
      gifUrl: `${cloudFrontUrl}/${exercise.id}.gif`
    }))

    const buf = Buffer.from(JSON.stringify(exercises.data))

    await s3.upload({
      Bucket: 'pump-data/json',
      Key: 'all-exercises.json',
      Body: buf,
      ContentEncoding: 'base64',
      ContentType: 'application/json'
    }).promise()
  }
}
