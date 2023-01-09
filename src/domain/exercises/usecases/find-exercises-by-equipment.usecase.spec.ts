import { ExerciseNotFoundByEquipmentException } from '../../exceptions/exercises/exercise-not-found-by-equipment.exception'
import { EquipmentTypeAggregate } from '../../aggregates'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExercisesByEquipmentUsecase } from './find-exercises-by-equipment.usecase'

describe('FindExercisesByEquipmentUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let findExercisesByEquipmentUsecase: FindExercisesByEquipmentUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn(),
      findByBodyPart: jest.fn(),
      findByEquipment: jest.fn()
    }

    findExercisesByEquipmentUsecase = new FindExercisesByEquipmentUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should find all exercises by equipment', async () => {
      const expectedResult: FindExercisesByEquipmentUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findByEquipment').mockResolvedValue(expectedResult)

      const input: EquipmentTypeAggregate = 'assisted'
      const output = await findExercisesByEquipmentUsecase.execute(input)

      expect(output).toEqual(expectedResult)
    })

    it('should call FindByEquipment with correct values', async () => {
      const expectedResult: FindExercisesByEquipmentUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findByEquipment').mockResolvedValue(expectedResult)

      const input: EquipmentTypeAggregate = 'assisted'
      await findExercisesByEquipmentUsecase.execute(input)

      expect(exerciseRepository.findByEquipment).toBeCalledWith(input)
    })

    it('should throw an ExerciseNotFoundByEquipmentException if no exercise is found with the given equipment', async () => {
      jest.spyOn(exerciseRepository, 'findByEquipment').mockResolvedValue([])

      const input: EquipmentTypeAggregate = 'assisted'
      await expect(findExercisesByEquipmentUsecase.execute(input)).rejects.toThrow(ExerciseNotFoundByEquipmentException)
    })
  })
})
