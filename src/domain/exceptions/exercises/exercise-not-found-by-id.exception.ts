import { ExerciseBaseException } from '../base'

export class ExerciseNotFoundByIdException extends ExerciseBaseException {
  constructor (id: string) {
    super('EXERCISE_NOT_FOUND_BY_ID', `Exercise with id "${id}" not found.`)
  }
}
