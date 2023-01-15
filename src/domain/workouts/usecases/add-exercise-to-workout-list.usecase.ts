import { ExerciseIdsNotDefinedException } from 'src/domain/exceptions/workouts/exercise-ids-not-defined.exception'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'

export class AddExerciseToWorkoutListUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository
  ) {
    this.workoutRepository = workoutRepository
  }

  async execute (id: string, exerciseIds: string[]): Promise<void> {
    if (exerciseIds === undefined || exerciseIds == null || exerciseIds.length === 0) {
      throw new ExerciseIdsNotDefinedException(exerciseIds)
    }

    await this.workoutRepository.addExercise(id, exerciseIds)
  }
}
