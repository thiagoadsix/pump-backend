import { Sets } from '@domain/entities/workout'
import { WorkoutNotFoundByIdAndUserIdException } from '@domain/exceptions/workouts/workout-not-found-by-id-and-user-id.exceptions'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'

export class AddExerciseToWorkoutListUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository
  ) {
    this.workoutRepository = workoutRepository
  }

  async execute (input: AddExerciseToWorkoutListUsecase.Input): Promise<void> {
    const workout = await this.workoutRepository.findByIdAndUserId(input.id, input.userId)

    if (workout == null) {
      throw new WorkoutNotFoundByIdAndUserIdException(input.id, input.userId)
    }

    await this.workoutRepository.addExercise({ ...workout, updatedAt: new Date().toISOString() })
  }
}

export namespace AddExerciseToWorkoutListUsecase {
  export interface Input {
    id: string
    userId: string
    sets: Sets[]
  }
}
