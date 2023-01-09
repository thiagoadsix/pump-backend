import { WorkoutRepository } from 'src/domain/protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'

export class FindAllWorkoutsUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository
  ) {
    this.workoutRepository = workoutRepository
  }

  async execute (userId: string): Promise<FindAllWorkoutsUsecase.Output> {
    return await this.workoutRepository.findAll(userId)
  }
}

export namespace FindAllWorkoutsUsecase {
  export type Output = Workout[]
}
