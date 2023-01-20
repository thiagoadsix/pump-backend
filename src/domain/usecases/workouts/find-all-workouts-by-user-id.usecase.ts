import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'
import { Exercise } from '../../entities/exercise'

export class FindAllWorkoutsByUserIdUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository,
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.workoutRepository = workoutRepository
    this.exerciseRepository = exerciseRepository
  }

  async execute (userId: string): Promise<FindAllWorkoutsByUserIdUsecase.Output> {
    const workouts = await this.workoutRepository.findAll(userId)
    const exerciseIds = workouts.map((workout: Workout) => workout.sets.map(set => set.id)).flatMap(id => id)
    const exercises = await this.exerciseRepository.findByIds(exerciseIds)

    return workouts.map(workout => {
      return {
        ...workout,
        exercises
      }
    })
  }
}

export namespace FindAllWorkoutsByUserIdUsecase {
  interface WorkoutWithExercises extends Workout {
    exercises: Exercise[]
  }

  export type Output = WorkoutWithExercises[] | []
}
