import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'
import { Exercise } from '../../entities/exercise'
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

    const exercises = await this.exerciseRepository.findByIds(exerciseIds)

    return {
      ...workout,
      exercises
    }
  }
}

export namespace FindWorkoutByIdAndUserIdUsecase {
  export interface Input {
    id: string
    userId: string
  }

  interface WorkoutWithExercise extends Workout {
    exercises: Exercise[]
  }

  export type Output = WorkoutWithExercise
}
