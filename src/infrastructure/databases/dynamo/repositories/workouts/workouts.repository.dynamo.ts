import { Workout } from '@domain/entities/workout'
import { WorkoutRepository } from '@domain/protocols/repositories/workout.repository'
import { DynamoClient } from '../../dynamo-client'

export class WorkoutsRepositoryDynamo implements WorkoutRepository {
  constructor (private readonly client: DynamoClient) {
    this.client = client
  }

  async addExercise (input: Workout): Promise<void> {
    const params: AWS.DynamoDB.DocumentClient.UpdateItemInput = {
      TableName: String(process.env.WORKOUTS_TABLE_NAME),
      Key: { id: input.id, userId: input.userId },
      UpdateExpression: 'SET #sets = list_append(if_not_exists(#sets, :empty_list), :sets), updatedAt = :updatedAt',
      ExpressionAttributeNames: {
        '#sets': 'sets'
      },
      ExpressionAttributeValues: {
        ':sets': input.sets,
        ':empty_list': [],
        ':updatedAt': input.updatedAt
      },
      ReturnValues: 'ALL_NEW'
    }
    await this.client.update(params)
  }

  async delete (id: string, userId: string): Promise<void> {
    await this.client.delete({
      TableName: String(process.env.WORKOUTS_TABLE_NAME),
      Key: { id, userId }
    })
  }

  async findByIdAndUserId (id: string, userId: string): Promise<Workout | null> {
    const params = {
      TableName: String(process.env.WORKOUTS_TABLE_NAME),
      Key: { id, userId }
    }

    const result = await this.client.get(params)

    if (result.Item != null) {
      return this.fromDynamoDBItem(result.Item)
    }

    return null
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
      name: item.name,
      sets: item.sets,
      createdAt: item.createdAt,
      updatedAt: item?.updatedAt
    }
  }
}
