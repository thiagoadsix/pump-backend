import { ExerciseNotFoundByTargetException } from '../../exceptions/exercises/exercise-not-found-by-target.exception'
import { TargetTypeAggregate } from '../../aggregates'
import { Exercise } from '../../entities/exercise'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'

export class FindExercisesByTargetUsecase {
  constructor (
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.exerciseRepository = exerciseRepository
  }

  async execute (target: TargetTypeAggregate): Promise<FindExercisesByTargetUsecase.Output> {
    const exercises = await this.exerciseRepository.findByTarget(target)

    if (exercises.length === 0) {
      throw new ExerciseNotFoundByTargetException(target)
    }

    return exercises
  }
}

export namespace FindExercisesByTargetUsecase {
  export type Output = Exercise[]
}
