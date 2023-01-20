import { Workout } from '../../entities/workout'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'

export class WorkoutRepositoryMock implements WorkoutRepository {
  async addExercise (input: Workout): Promise<void> {
    console.log(`Adding an exercise to workout (${JSON.stringify(input)}).`)
  }

  async save (input: Workout): Promise<void> {
    console.log(`Saving a new workout list: ${JSON.stringify(input)}`)
  }

  async findById (id: string): Promise<Workout | null> {
    console.log(`Find workout with id ${JSON.stringify(id)}`)

    return await Promise.resolve<Workout>({
      id: 'aaaa1111-bb22-cc33-dd44-eeeeee555555',
      userId: 'zzzz1111-xx22-tt33-pp44-yyyyyy555555',
      name: 'Superior',
      sets: [{
        id: 'set-id-mock',
        repetitions: 3,
        series: 10,
        weight: 10
      }],
      createdAt: new Date().toISOString()
    })
  }

  async findAll (userId: string): Promise<Workout[] | []> {
    console.log(`Find workouts with userId ${JSON.stringify(userId)}`)

    return await Promise.resolve<Workout[]>([
      {
        id: 'aaaa1111-bb22-cc33-dd44-eeeeee555555',
        userId,
        name: 'Superior',
        sets: [{
          id: 'set-id-mock',
          repetitions: 3,
          series: 10,
          weight: 10
        }],
        createdAt: new Date().toISOString()
      }
    ])
  }

  async delete (id: string, userId: string): Promise<void> {
    console.log(`Deleting a workout by id ${JSON.stringify(id)} and userId ${JSON.stringify(userId)}`)
  }
}
