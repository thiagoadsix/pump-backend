import { WorkoutBaseException } from '../base'

export class ExerciseIdsNotDefinedException extends WorkoutBaseException {
  constructor (exerciseIds: string[]) {
    super('EXERCISE_ID_NOT_DEFINED', `Does not exists any exercises ${JSON.stringify(exerciseIds)} to add to Workout list.`)
  }
}
