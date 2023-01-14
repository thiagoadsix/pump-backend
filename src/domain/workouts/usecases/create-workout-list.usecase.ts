import { UUIDService } from '../../protocols/services/uuid.service'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'

export class CreateWorkoutListUsecase {
  constructor (private readonly uuidService: UUIDService, private readonly workoutRepository: WorkoutRepository) {
    this.uuidService = uuidService
    this.workoutRepository = workoutRepository
  }

  async execute (input: CreateWorkoutListUsecase.Input): Promise<void> {
    const workout: Workout = {
      id: await this.uuidService.v4(),
      title: input.title,
      // Fix this later
      exerciseIds: [],
      userId: input.userId,
      createdAt: new Date().toISOString()
    }

    await this.workoutRepository.save(workout)
  }
}

export namespace CreateWorkoutListUsecase {
  export interface Input {
    userId: string
    title: string
  }
}
