import { WorkoutRepository } from '../../protocols/repositories/workout.repository'

export class AddExerciseToWorkoutListUsecase {
  constructor (
    private readonly workoutRepository: WorkoutRepository
  ) {
    this.workoutRepository = workoutRepository
  }

  async execute (id: string, exerciseIds: string[]): Promise<void> {
    await this.workoutRepository.addExercise(id, exerciseIds)
  }
}
