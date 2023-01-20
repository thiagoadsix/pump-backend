import { Sets, Workout } from '../../entities/workout'

export namespace WorkoutRepository {
  export interface AddExerciseInput {
    id: string
    userId: string
    sets: Sets[]
    updatedAt: string
  }
}

export interface WorkoutRepository {
  addExercise: (input: Workout) => Promise<void>
  save: (input: Workout) => Promise<void>
  findAll: (userId: string) => Promise<Workout[] | []>
  findByIdAndUserId: (id: string, userId: string) => Promise<Workout | null>
  delete: (id: string, userId: string) => Promise<void>
}
