import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'
import { Exercise } from '../../entities/exercise'

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
      throw new Error('Error')
    }

    const exercises = await this.exerciseRepository.findByIds(workout.exerciseIds)

    return {
      ...workout,
      exercises
    }
  }
}

export namespace FindWorkoutByIdUsecase {
  interface WorkoutWithExercise extends Workout {
    exercises: Exercise[]
  }

  export type Output = WorkoutWithExercise
}
