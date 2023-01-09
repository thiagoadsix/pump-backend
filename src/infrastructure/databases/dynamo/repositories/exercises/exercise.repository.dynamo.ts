import { TargetTypeAggregate, BodyPartTypeAggregate, EquipmentTypeAggregate } from '../../../../../domain/aggregates'
import { Exercise } from '../../../../../domain/entities/exercise'
import { ExerciseRepository } from '../../../../../domain/protocols/repositories/exercise.repository'
import { DynamoClient } from '../../dynamo-client'

export class ExerciseRepositoryDynamo implements ExerciseRepository {
  constructor (private readonly client: DynamoClient) {
    this.client = client
  }

  async findById (id: string): Promise<Exercise | null> {
    const result = await this.client.query({
      TableName: String(process.env.EXERCISE_TABLE_NAME),
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: {
        '#id': 'id'
      },
      ExpressionAttributeValues: {
        ':id': id
      },
      Limit: 1
    }).then(item => item.Items?.shift())

    if (result == null) {
      return null
    }

    return this.fromDynamoDBItem(result)
  }

  async findAll (): Promise<Exercise[] | []> {
    const result = await this.client.scan({ TableName: String(process.env.EXERCISE_TABLE_NAME) })

    if (result.Items == null) {
      return []
    }

    return result.Items.map(item => this.fromDynamoDBItem(item))
  }

  async findByTarget (target: TargetTypeAggregate): Promise<Exercise[]> {
    const result = await this.client.scan({
      TableName: String(process.env.EXERCISE_TABLE_NAME),
      FilterExpression: 'target = :target',
      ExpressionAttributeValues: {
        ':target': target
      }
    })

    if (result.Items == null) {
      return []
    }

    return result.Items.map(item => this.fromDynamoDBItem(item))
  }

  async findByBodyPart (bodyPart: BodyPartTypeAggregate): Promise<Exercise[]> {
    const result = await this.client.query({
      TableName: String(process.env.EXERCISE_TABLE_NAME),
      IndexName: 'bodyPart-index',
      KeyConditionExpression: 'bodyPart = :bodyPart',
      ExpressionAttributeValues: {
        ':bodyPart': bodyPart
      }
    })

    if (result.Items == null) {
      return []
    }

    return result.Items.map(item => this.fromDynamoDBItem(item))
  }

  async findByEquipment (equipment: EquipmentTypeAggregate): Promise<Exercise[]> {
    const result = await this.client.query({
      TableName: String(process.env.EXERCISE_TABLE_NAME),
      IndexName: 'equipment-index',
      KeyConditionExpression: 'equipment = :equipment',
      ExpressionAttributeValues: {
        ':equipment': equipment
      }
    })

    if (result.Items == null) {
      return []
    }

    return result.Items.map(item => this.fromDynamoDBItem(item))
  }

  private fromDynamoDBItem (item: AWS.DynamoDB.DocumentClient.AttributeMap): Exercise {
    return {
      id: item.id,
      name: item.name,
      target: item.target,
      bodyPart: item.bodyPart,
      equipment: item.equipment,
      url: item.url
    }
  }
}
