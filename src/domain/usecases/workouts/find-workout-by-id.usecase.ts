import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'
import { Exercise } from '../../entities/exercise'
import { WorkoutNotFoundByIdException } from '../../exceptions/workouts/workout-not-found-by-id.exceptions'

export class FindWorkoutByIdUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository,
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.workoutRepository = workoutRepository
    this.exerciseRepository = exerciseRepository
  }

  async execute (id: string): Promise<FindWorkoutByIdUsecase.Output> {
    const workout = await this.workoutRepository.findById(id)

    if (workout == null) {
      throw new WorkoutNotFoundByIdException(id)
    }

    if (workout.exerciseIds != null) {
      const exercises = await this.exerciseRepository.findByIds(workout.exerciseIds)
      return {
        ...workout,
        exercises
      }
    }

    return {
      ...workout,
      exercises: []
    }
  }
}

export namespace FindWorkoutByIdUsecase {
  interface WorkoutWithExercise extends Workout {
    exercises?: Exercise[]
  }

  export type Output = WorkoutWithExercise
}
