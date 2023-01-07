import { EquipmentTypeAggregate } from '../../aggregates'
import { ExerciseBaseException } from '../base'

export class ExerciseNotFoundByEquipmentException extends ExerciseBaseException {
  constructor (equipment: EquipmentTypeAggregate) {
    super('EXERCISE_NOT_FOUND_BY_EQUIPMENT', `Exercise with equipment "${equipment}" not found.`)
  }
}
