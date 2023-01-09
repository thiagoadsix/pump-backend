import { BodyPartTypeAggregate, EquipmentTypeAggregate, TargetTypeAggregate } from '../../aggregates'
import { Exercise } from '../../entities/exercise'

export interface ExerciseRepository {
  findById: (id: string) => Promise<Exercise | null>
  findAll: () => Promise<Exercise[]>
  findByTarget: (target: TargetTypeAggregate) => Promise<Exercise[]>
  findByBodyPart: (bodyPart: BodyPartTypeAggregate) => Promise<Exercise[]>
  findByEquipment: (equipment: EquipmentTypeAggregate) => Promise<Exercise[]>
  findByIds: (ids: string[]) => Promise<Exercise[]>
}
