import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'
import { Exercise } from '../../entities/exercise'

export class FindAllWorkoutsUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository,
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.workoutRepository = workoutRepository
    this.exerciseRepository = exerciseRepository
  }

  async execute (userId: string): Promise<FindAllWorkoutsUsecase.Output> {
    const workouts = await this.workoutRepository.findAll(userId)
    const workoutsWithExercises = await Promise.all(workouts.map(async workout => {
      if (workout.exerciseIds != null) {
        const exercises = await this.exerciseRepository.findByIds(workout.exerciseIds)
        return { ...workout, exercises }
      }

      return []
    }))

    return workoutsWithExercises
  }
}

export namespace FindAllWorkoutsUsecase {
  interface WorkoutWithExercises extends Workout {
    exercises: Exercise[]
  }

  export type Output = WorkoutWithExercises[] | []
}
