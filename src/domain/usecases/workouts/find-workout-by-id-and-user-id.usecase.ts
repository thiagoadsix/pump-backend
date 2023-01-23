import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'
import { WorkoutNotFoundByIdAndUserIdException } from '../../exceptions/workouts/workout-not-found-by-id-and-user-id.exceptions'

export class FindWorkoutByIdAndUserIdUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository,
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.workoutRepository = workoutRepository
    this.exerciseRepository = exerciseRepository
  }

  async execute (input: FindWorkoutByIdAndUserIdUsecase.Input): Promise<FindWorkoutByIdAndUserIdUsecase.Output> {
    const workout = await this.workoutRepository.findByIdAndUserId(input.id, input.userId)

    if (workout == null) {
      throw new WorkoutNotFoundByIdAndUserIdException(input.id, input.userId)
    }

    const exerciseIds = workout.sets.map(set => set.id)

    if (exerciseIds.length === 0) {
      return {
        ...workout
      }
    }

    const exercises = await this.exerciseRepository.findByIds(exerciseIds)

    const set = workout.sets.map(set => {
      return {
        ...set,
        exercise: exercises.find(exercise => exercise.id === set.id)
      }
    })

    return {
      ...workout,
      sets: set
    }
  }
}

export namespace FindWorkoutByIdAndUserIdUsecase {
  export interface Input {
    id: string
    userId: string
  }

  export type Output = Workout
}
