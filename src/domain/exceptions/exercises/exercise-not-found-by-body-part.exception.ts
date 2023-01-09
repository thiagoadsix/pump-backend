import { BodyPartTypeAggregate } from '../../aggregates'
import { ExerciseBaseException } from '../base'

export class ExerciseNotFoundByBodyPartException extends ExerciseBaseException {
  constructor (bodyPart: BodyPartTypeAggregate) {
    super('EXERCISE_NOT_FOUND_BY_BODY_PART', `Exercise with body part "${bodyPart}" not found.`)
  }
}
