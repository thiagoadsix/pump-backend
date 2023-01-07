import { Exercise } from '../../../domain/entities/exercise'

export interface ExerciseRepository {
  findById: (id: string) => Promise<Exercise | null>
}
