import { S3 } from 'aws-sdk'
import { stage } from '../../envs/stage'
import { StageType } from '../../envs/stage-type'

export class S3Gateway {
  private readonly s3: S3

  constructor () {
    this.s3 = new S3(process.env.STAGE === 'local' as StageType ? stage('local').s3 : stage(process.env.STAGE as StageType).s3)
  }

  public client (): S3 {
    return this.s3
  }
}
