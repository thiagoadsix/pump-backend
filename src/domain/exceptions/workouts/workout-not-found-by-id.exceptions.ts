import { WorkoutBaseException } from '../base'

export class WorkoutNotFoundByIdException extends WorkoutBaseException {
  constructor (id: string) {
    super('WORKOUT_NOT_FOUND_BY_ID', `Workout with id "${id}" not found.`)
  }
}
