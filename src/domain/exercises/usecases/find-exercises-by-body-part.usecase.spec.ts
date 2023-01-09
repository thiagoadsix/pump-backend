import { ExerciseNotFoundByBodyPartException } from '../../exceptions/exercises/exercise-not-found-by-body-part.exception'
import { BodyPartTypeAggregate } from '../../aggregates'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExercisesByBodyPartUsecase } from './find-exercises-by-body-part.usecase'

describe('FindExercisesByBodyPartUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let findExercisesByBodyPartUsecase: FindExercisesByBodyPartUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn(),
      findByBodyPart: jest.fn(),
      findByEquipment: jest.fn(),
      findByIds: jest.fn()
    }

    findExercisesByBodyPartUsecase = new FindExercisesByBodyPartUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should find all exercises by body part', async () => {
      const expectedResult: FindExercisesByBodyPartUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findByBodyPart').mockResolvedValue(expectedResult)

      const input: BodyPartTypeAggregate = 'back'
      const output = await findExercisesByBodyPartUsecase.execute(input)

      expect(output).toEqual(expectedResult)
    })

    it('should call FindByBodyPart with correct values', async () => {
      const expectedResult: FindExercisesByBodyPartUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findByBodyPart').mockResolvedValue(expectedResult)

      const input: BodyPartTypeAggregate = 'back'
      await findExercisesByBodyPartUsecase.execute(input)

      expect(exerciseRepository.findByBodyPart).toBeCalledWith(input)
    })

    it('should throw an ExerciseNotFoundByBodyPartException if no exercise is found with the given body part', async () => {
      jest.spyOn(exerciseRepository, 'findByBodyPart').mockResolvedValue([])

      const input: BodyPartTypeAggregate = 'back'
      await expect(findExercisesByBodyPartUsecase.execute(input)).rejects.toThrow(ExerciseNotFoundByBodyPartException)
    })
  })
})
