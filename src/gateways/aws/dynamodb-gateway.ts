import { DynamoDB } from 'aws-sdk'
import { stage, StageType } from '@envs/index'

export class DynamoDBGateway {
  private readonly dynamoDB: DynamoDB

  constructor () {
    this.dynamoDB = new DynamoDB(process.env.STAGE === 'local' as StageType ? stage('local').s3 : stage(process.env.STAGE as StageType).s3)
  }

  public client (): DynamoDB {
    return this.dynamoDB
  }
}
