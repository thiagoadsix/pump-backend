import { ExerciseBaseException } from '../base'

export class ExerciseNotFoundException extends ExerciseBaseException {
  constructor (id: string) {
    super('EXERCISE_NOT_FOUND', `Exercise with id "${id}" not found.`)
  }
}
