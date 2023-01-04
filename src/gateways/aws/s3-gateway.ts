import { S3 } from 'aws-sdk'

export class S3Gateway {
  private readonly s3: S3

  constructor () {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    })
  }

  public client (): S3 {
    return this.s3
  }
}
