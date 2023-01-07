import { Exercise } from '../../entities/exercise'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'

export class FindAllExerciseUsecase {
  constructor (
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.exerciseRepository = exerciseRepository
  }

  async execute (): Promise<FindAllExerciseUsecase.Output> {
    return await this.exerciseRepository.findAll()
  }
}

export namespace FindAllExerciseUsecase {
  export type Output = Exercise[]
}
