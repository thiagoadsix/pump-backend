import { Workout } from '../../../../../domain/entities/workout'
import { WorkoutRepository } from '../../../../../domain/protocols/repositories/workout.repository'
import { DynamoClient } from '../../dynamo-client'

export class WorkoutsRepositoryDynamo implements WorkoutRepository {
  constructor (private readonly client: DynamoClient) {
    this.client = client
  }

  async save (input: Workout): Promise<void> {
    await this.client.put({ TableName: String(process.env.WORKOUTS_TABLE_NAME), Item: { ...input } })
  }
}
