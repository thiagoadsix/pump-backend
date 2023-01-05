import { S3 } from 'aws-sdk'

export class S3Gateway {
  private readonly s3: S3

  constructor () {
    this.s3 = new S3({
      credentials: {
        accessKeyId: '123',
        secretAccessKey: 'xyz'
      },
      endpoint: 'http://localhost:4566',
      s3ForcePathStyle: true
    })
  }

  public client (): S3 {
    return this.s3
  }
}
