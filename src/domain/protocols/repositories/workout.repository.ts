import { Workout } from '../../entities/workout'

export interface WorkoutRepository {
  save: (input: Workout) => Promise<void>
  findAll: (userId: string) => Promise<Workout[]>
}
