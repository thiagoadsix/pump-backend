import { BodyPartTypeAggregate, TargetTypeAggregate } from '../../aggregates'
import { Exercise } from '../../../domain/entities/exercise'

export interface ExerciseRepository {
  findById: (id: string) => Promise<Exercise | null>
  findAll: () => Promise<Exercise[] | []>
  findByTarget: (target: TargetTypeAggregate) => Promise<Exercise[]>
  findByBodyPart: (bodyPart: BodyPartTypeAggregate) => Promise<Exercise[]>
}
