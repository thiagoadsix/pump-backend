import { Workout } from '@domain/entities/workout'
import { WorkoutRepository } from '@domain/protocols/repositories/workout.repository'
import { DynamoClient } from '../../dynamo-client'

export class WorkoutsRepositoryDynamo implements WorkoutRepository {
  constructor (private readonly client: DynamoClient) {
    this.client = client
  }

  async addExercise (id: string, ids: string[]): Promise<void> {
    const workout = await this.findById(id)

    if (workout == null) {
      return
    }

    if (workout.exerciseIds == null) {
      workout.exerciseIds = []
    }

    ids.forEach(exerciseId => {
      if (workout.exerciseIds != null) {
        if (!workout.exerciseIds.includes(exerciseId)) {
          workout.exerciseIds.push(exerciseId)
        }
      }
    })

    workout.updatedAt = new Date().toISOString()
    await this.save(workout)
  }

  async delete (id: string, userId: string): Promise<void> {
    await this.client.delete({
      TableName: String(process.env.WORKOUTS_TABLE_NAME),
      Key: { id, userId }
    })
  }

  async findById (id: string): Promise<Workout | null> {
    const result = await this.client.query({
      TableName: String(process.env.WORKOUTS_TABLE_NAME),
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
