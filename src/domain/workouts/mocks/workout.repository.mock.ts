import { Workout } from '../../entities/workout'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'

export class WorkoutRepositoryMock implements WorkoutRepository {
  async addExercise (id: string, exerciseIds: string[]): Promise<void> {
    console.log(`Adding an exercise to workout (${JSON.stringify(id)}) list: ${JSON.stringify(exerciseIds)}`)
  }

  async save (input: Workout): Promise<void> {
    console.log(`Saving a new workout list: ${JSON.stringify(input)}`)
  }

  async findAll (userId: string): Promise<Workout[]> {
    console.log(`Find workouts with userId ${JSON.stringify(userId)}`)

    return await Promise.resolve<Workout[]>([
      {
        id: 'aaaa1111-bb22-cc33-dd44-eeeeee555555',
        title: 'Superior',
        exerciseIds: ['0001', '0002'],
        userId: 'zzzz1111-xx22-tt33-pp44-yyyyyy555555',
        createdAt: new Date().toISOString()
      }
    ])
  }

  async findById (id: string): Promise<Workout | null> {
    console.log(`Find workout with id ${JSON.stringify(id)}`)

    return await Promise.resolve<Workout>({
      id: 'aaaa1111-bb22-cc33-dd44-eeeeee555555',
      title: 'Superior',
      exerciseIds: ['0001', '0002'],
      userId: 'zzzz1111-xx22-tt33-pp44-yyyyyy555555',
      createdAt: new Date().toISOString()
    })
  }

  async delete (id: string, userId: string): Promise<void> {
    console.log(`Deleting a workout by id ${JSON.stringify(id)} and userId ${JSON.stringify(userId)}`)
  }
}
