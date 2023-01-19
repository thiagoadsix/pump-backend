import { ExerciseNotFoundByEquipmentException } from '../../exceptions/exercises/exercise-not-found-by-equipment.exception'
import { EquipmentTypeAggregate } from '../../aggregates'
import { Exercise } from '../../entities/exercise'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'

export class FindExercisesByEquipmentUsecase {
  constructor (
    private readonly exerciseRepository: ExerciseRepository
  ) {
    this.exerciseRepository = exerciseRepository
  }

  async execute (equipment: EquipmentTypeAggregate): Promise<FindExercisesByEquipmentUsecase.Output> {
    const exercises = await this.exerciseRepository.findByEquipment(equipment)

    if (exercises.length === 0) {
      throw new ExerciseNotFoundByEquipmentException(equipment)
    }

    return exercises
  }
}

export namespace FindExercisesByEquipmentUsecase {
  export type Output = Exercise[]
}
