import { Workout } from '../../../../../domain/entities/workout'
import { WorkoutRepository } from '../../../../../domain/protocols/repositories/workout.repository'
import { DynamoClient } from '../../dynamo-client'

export class WorkoutsRepositoryDynamo implements WorkoutRepository {
  constructor (private readonly client: DynamoClient) {
    this.client = client
  }

  async findAll (userId: string): Promise<Workout[]> {
    const result = await this.client.scan({
      TableName: String(process.env.WORKOUTS_TABLE_NAME),
      FilterExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ':userId': userId
      }
    })

    if (result.Items == null) {
      return []
    }

    return result.Items.map(item => this.fromDynamoDBItem(item))
  }

  async save (input: Workout): Promise<void> {
    await this.client.put({ TableName: String(process.env.WORKOUTS_TABLE_NAME), Item: { ...input } })
  }

  private fromDynamoDBItem (item: AWS.DynamoDB.DocumentClient.AttributeMap): Workout {
    return {
      id: item.id,
      userId: item.userId,
      title: item.title,
      createdAt: item.createdAt,
      exerciseIds: item.exerciseIds,
      updatedAt: item?.updatedAt
    }
  }
}
