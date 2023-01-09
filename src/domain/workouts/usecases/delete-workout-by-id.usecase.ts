import { WorkoutRepository } from 'src/domain/protocols/repositories/workout.repository'

export class DeleteWorkoutByIdUsecase {
  constructor (private readonly workoutRepository: WorkoutRepository) {
    this.workoutRepository = workoutRepository
  }

  async execute (id: string, userId: string): Promise<void> {
    await this.workoutRepository.delete(id, userId)
  }
}
