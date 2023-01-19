import { ExerciseNotFoundByEquipmentException } from '../../exceptions/exercises/exercise-not-found-by-equipment.exception'
import { EquipmentTypeAggregate } from '../../aggregates'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExercisesByEquipmentUsecase } from './find-exercises-by-equipment.usecase'
import { ExerciseRepositoryMock } from '../..//workouts/mocks/exercise.repository.mock'

describe('FindExercisesByEquipmentUsecase', () => {
  let exerciseRepository: ExerciseRepository

  let sut: FindExercisesByEquipmentUsecase

  beforeEach(() => {
    exerciseRepository = new ExerciseRepositoryMock()

    sut = new FindExercisesByEquipmentUsecase(exerciseRepository)
  })

  it('should call ExerciseRepository.findByEquipment with correct values', async () => {
    const exerciseRepositoryFindByEquipmentSpy = jest.spyOn(exerciseRepository, 'findByEquipment')

    const input: EquipmentTypeAggregate = 'assisted'
    await sut.execute(input)

    expect(exerciseRepositoryFindByEquipmentSpy).toHaveBeenCalledTimes(1)
    expect(exerciseRepositoryFindByEquipmentSpy).toHaveBeenCalledWith(input)
  })

  it('should throw an ExerciseNotFoundByEquipmentException if no exercise is found with the given equipment', async () => {
    jest.spyOn(exerciseRepository, 'findByEquipment').mockResolvedValue([])

    const input: EquipmentTypeAggregate = 'assisted'
    const result = sut.execute(input)

    await expect(result).rejects.toThrow(ExerciseNotFoundByEquipmentException)
  })
})
