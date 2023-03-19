/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { ManagedUpload } from 'aws-sdk/clients/s3'
import fetch, { Response } from 'node-fetch'
import { S3 } from 'aws-sdk'
import { Chunk } from 'src/utils/chunk'

export class PopulateS3WithGifsRobot {
  private readonly s3: S3

  constructor () {
    this.s3 = new S3({
      credentials: {
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
        secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY)
      },
      s3ForcePathStyle: true
    })
  }

  async execute (): Promise<void> {
    await Chunk.chunk(Chunk.getIdList(1325), this.saveOnBucket.bind(this), 10)
  }

  private async saveOnBucket (id: string): Promise<ManagedUpload.SendData | void> {
    try {
      const imgURL = `${process.env.EXERCISE_CLOUD_FRONT_BASE_URL}/${id}.gif`

      const res = await this.fetchWithRetries(imgURL)

      const blob = await res.buffer()

      const result = await this.s3
        .upload({
          Bucket: 'pump-assets',
          Key: `${id}.gif`,
          Body: blob,
          ContentType: 'image/gif'
        })
        .promise()

      return result
    } catch (error) {
      console.error(`Error saving image ${id} to bucket:`, error)
    }
  }

  private async fetchWithRetries (url: string, retries: number = 3): Promise<Response> {
    for (let i = 0; i < retries; i++) {
      try {
        const res = await fetch(url)
        if (res.ok) {
          return res
        }
        console.warn(`Fetch failed: ${res.status} ${res.statusText}. Retrying (${i + 1}/${retries})...`)
      } catch (error) {
        console.warn(`Fetch error: ${error}. Retrying (${i + 1}/${retries})...`)
      }
    }
    throw new Error(`Failed to fetch ${url} after ${retries} retries.`)
  }
}
