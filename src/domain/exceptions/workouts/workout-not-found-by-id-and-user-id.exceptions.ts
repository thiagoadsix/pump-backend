import { WorkoutBaseException } from '../base'

export class WorkoutNotFoundByIdAndUserIdException extends WorkoutBaseException {
  constructor (id: string, userId: string) {
    super('WORKOUT_NOT_FOUND_BY_ID_AND_USER_ID', `Workout with id "${id}" and userId "${userId}" not found.`)
  }
}
