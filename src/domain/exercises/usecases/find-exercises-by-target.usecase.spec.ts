import { TargetTypeAggregate } from '../../aggregates'
import { ExerciseNotFoundByTargetException } from '../../exceptions/exercises/exercise-not-found-by-target.exception'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExercisesByTargetUsecase } from './find-exercises-by-target.usecase'

describe('FindExerciseByTargetUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let findExercisesByTargetUsecase: FindExercisesByTargetUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn(),
      findByBodyPart: jest.fn(),
      findByEquipment: jest.fn(),
      findByIds: jest.fn()
    }

    findExercisesByTargetUsecase = new FindExercisesByTargetUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should find all exercises by target', async () => {
      const expectedResult: FindExercisesByTargetUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findByTarget').mockResolvedValue(expectedResult)

      const input: TargetTypeAggregate = 'abs'
      const output = await findExercisesByTargetUsecase.execute(input)

      expect(output).toEqual(expectedResult)
    })

    it('should call FindByTarget with correct values', async () => {
      const expectedResult: FindExercisesByTargetUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findByTarget').mockResolvedValue(expectedResult)

      const input: TargetTypeAggregate = 'abs'
      await findExercisesByTargetUsecase.execute(input)

      expect(exerciseRepository.findByTarget).toBeCalledWith(input)
    })

    it('should throw an ExerciseNotFoundByTargetException if no exercise is found with the given target', async () => {
      jest.spyOn(exerciseRepository, 'findByTarget').mockResolvedValue([])

      const input: TargetTypeAggregate = 'abs'
      await expect(findExercisesByTargetUsecase.execute(input)).rejects.toThrow(ExerciseNotFoundByTargetException)
    })
  })
})
