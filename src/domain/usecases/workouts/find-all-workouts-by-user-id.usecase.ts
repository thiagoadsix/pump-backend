import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'

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

    if (workouts.length === 0) {
      return []
    }

    const exerciseIds = workouts.map((workout: Workout) => workout.sets.map(set => set.id)).flatMap(id => id)
    const exercises = await this.exerciseRepository.findByIds(exerciseIds)

    const workoutsWithExercises = workouts.map(workout => {
      const setsWithExercises = workout.sets.map(set => {
        return {
          ...set,
          exercise: exercises.find(exercise => exercise.id === set.id)
        }
      })
      return {
        ...workout,
        sets: setsWithExercises
      }
    })
    return workoutsWithExercises
  }
}

export namespace FindAllWorkoutsByUserIdUsecase {
  export type Output = Workout[] | []
}
