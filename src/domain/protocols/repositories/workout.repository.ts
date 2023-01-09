import { Workout } from '../../entities/workout'

export interface WorkoutRepository {
  save: (input: Workout) => Promise<void>
  findAll: (userId: string) => Promise<Workout[]>
  findById: (id: string) => Promise<Workout | null>
  delete: (id: string, userId: string) => Promise<void>
}
