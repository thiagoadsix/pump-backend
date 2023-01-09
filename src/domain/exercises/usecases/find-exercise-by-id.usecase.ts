import { ExerciseNotFoundByIdException } from '../../exceptions/exercises/exercise-not-found-by-id.exception'
import { Exercise } from '../../entities/exercise'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'

export class FindExerciseByIdUsecase {
  constructor (
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.exerciseRepository = exerciseRepository
  }

  async execute (id: string): Promise<FindExerciseByIdUsecase.Output> {
    const exercise = await this.exerciseRepository.findById(id)

    if (exercise == null) {
      throw new ExerciseNotFoundByIdException(id)
    }

    return exercise
  }
}

export namespace FindExerciseByIdUsecase {
  export type Output = Exercise
}
