import * as AWS from 'aws-sdk'

export type DynamoClientStageType = 'prod' | 'local'

export class DynamoClient {
  private readonly client: AWS.DynamoDB.DocumentClient

  constructor (stage: DynamoClientStageType) {
    let endpoint: string | undefined
    let accessKeyId: string | undefined
    let secretAccessKey: string | undefined

    if (stage === 'local') {
      endpoint = 'http://localhost:4566'
      accessKeyId = 'fakeAccessKeyId'
      secretAccessKey = 'fakeSecretAccessKey'
    } else if (stage === 'prod') {
      // Use prod DynamoDB endpoint and credentials
      accessKeyId = process.env.AMAZON_ACCESS_KEY_ID
      secretAccessKey = process.env.AMAZON_SECRET_ACCESS_KEY
    }

    this.client = new AWS.DynamoDB.DocumentClient({
      region: 'us-east-1',
      endpoint,
      accessKeyId,
      secretAccessKey
    })
  }

  async get (params: AWS.DynamoDB.DocumentClient.GetItemInput): Promise<AWS.DynamoDB.DocumentClient.GetItemOutput> {
    return await this.client.get(params).promise()
  }

  async put (params: AWS.DynamoDB.DocumentClient.PutItemInput): Promise<AWS.DynamoDB.DocumentClient.PutItemOutput> {
    return await this.client.put(params).promise()
  }

  async query (params: AWS.DynamoDB.DocumentClient.QueryInput): Promise<AWS.DynamoDB.DocumentClient.QueryOutput> {
    return await this.client.query(params).promise()
  }

  async scan (params: AWS.DynamoDB.DocumentClient.ScanInput): Promise<AWS.DynamoDB.DocumentClient.ScanOutput> {
    return await this.client.scan(params).promise()
  }

  async delete (params: AWS.DynamoDB.DocumentClient.DeleteItemInput): Promise<AWS.DynamoDB.DocumentClient.DeleteItemOutput> {
    return await this.client.delete(params).promise()
  }

  async update (params: AWS.DynamoDB.DocumentClient.UpdateItemInput): Promise<AWS.DynamoDB.DocumentClient.UpdateItemOutput> {
    return await this.client.update(params).promise()
  }

  async batchGet (params: AWS.DynamoDB.DocumentClient.BatchGetItemInput): Promise<AWS.DynamoDB.DocumentClient.BatchGetItemOutput> {
    return await this.client.batchGet(params).promise()
  }
}
