import { ManagedUpload } from 'aws-sdk/clients/s3'
import fetch from 'node-fetch'
import { Chunk } from 'src/utils/chunk'
import { S3 } from 'aws-sdk'

export class SaveAllGifExercisesRobot {
  async execute (): Promise<void> {
    await Chunk.chunk(Chunk.getIdList(1325), this.saveOnBucket, 2)
  }

  private async saveOnBucket (id: string): Promise<ManagedUpload.SendData> {
    const s3 = new S3({
      credentials: {
        accessKeyId: '123',
        secretAccessKey: 'xyz'
      },
      endpoint: 'http://localhost:4566',
      s3ForcePathStyle: true
    })
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const imgURL = `${process.env.CLOUD_FRONT_BASE_URL}/${id}.gif`
    console.log({ imgURL })
    const res = await fetch(imgURL)
    const blob = await res.buffer()
    const result = await s3.upload({
      Bucket: 'pump-data/gifs',
      Key: `${id}.gif`,
      Body: blob
    }).promise()
    return result
  }
}
