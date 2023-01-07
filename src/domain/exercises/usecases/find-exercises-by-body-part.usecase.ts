import { BodyPartTypeAggregate } from '../../aggregates'
import { Exercise } from '../../entities/exercise'
import { ExerciseNotFoundByBodyPartException } from '../../exceptions/exercises/exercise-not-found-by-body-part.exception'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'

export class FindExercisesByBodyPartUsecase {
  constructor (
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.exerciseRepository = exerciseRepository
  }

  async execute (bodyPart: BodyPartTypeAggregate): Promise<FindExercisesByBodyPartUsecase.Output> {
    const exercises = await this.exerciseRepository.findByBodyPart(bodyPart)

    if (exercises.length === 0) {
      throw new ExerciseNotFoundByBodyPartException(bodyPart)
    }

    return exercises
  }
}

export namespace FindExercisesByBodyPartUsecase {
  export type Output = Exercise[]
}
