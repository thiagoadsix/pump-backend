import { S3 } from 'aws-sdk'

export class S3Gateway {
  private readonly s3: S3

  constructor () {
    this.s3 = new S3({
      accessKeyId: 'AKIAVNROQLO6LN3HEH4B',
      secretAccessKey: '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'
    })
  }

  public client (): S3 {
    return this.s3
  }
}
