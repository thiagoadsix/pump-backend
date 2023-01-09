import { TargetTypeAggregate } from '../../aggregates'
import { ExerciseBaseException } from '../base'

export class ExerciseNotFoundByTargetException extends ExerciseBaseException {
  constructor (target: TargetTypeAggregate) {
    super('EXERCISE_NOT_FOUND_BY_TARGET', `Exercise with target "${target}" not found.`)
  }
}
