import { UUIDService } from '../../protocols/services/uuid.service'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Sets, Workout } from '../../entities/workout'

export class CreateWorkoutListUsecase {
  constructor (private readonly uuidService: UUIDService, private readonly workoutRepository: WorkoutRepository) {
    this.uuidService = uuidService
    this.workoutRepository = workoutRepository
  }

  async execute (input: CreateWorkoutListUsecase.Input): Promise<void> {
    const workout: Workout = {
      id: await this.uuidService.v4(),
      userId: input.userId,
      name: input.name,
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      sets: input.sets || [],
      createdAt: new Date().toISOString()
    }

    await this.workoutRepository.save(workout)
  }
}

export namespace CreateWorkoutListUsecase {
  export interface Input {
    userId: string
    name: string
    sets: Sets[]
  }
}
