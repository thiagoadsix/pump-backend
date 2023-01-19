import { Exercise } from '../../entities/exercise'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'

export class FindAllExercisesUsecase {
  constructor (
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.exerciseRepository = exerciseRepository
  }

  async execute (): Promise<FindAllExercisesUsecase.Output> {
    return await this.exerciseRepository.findAll()
  }
}

export namespace FindAllExercisesUsecase {
  export type Output = Exercise[]
}
