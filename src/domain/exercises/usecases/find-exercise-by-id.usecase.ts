import { ExerciseNotFoundException } from '../../../domain/exceptions/exercises/exercise-not-found.exception'
import { Exercise } from '../../../domain/entities/exercise'
import { ExerciseRepository } from '../../../domain/protocols/repositories/exercise.repository'

export class FindExerciseByIdUsecase {
  constructor (
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.exerciseRepository = exerciseRepository
  }

  async execute (input: FindExerciseByIdUsecase.Input): Promise<FindExerciseByIdUsecase.Output> {
    const exercise = await this.exerciseRepository.findById(input.id)

    if (exercise == null) {
      throw new ExerciseNotFoundException(input.id)
    }

    return exercise
  }
}

export namespace FindExerciseByIdUsecase {
  export interface Input {
    id: string
  }

  export type Output = Exercise
}
