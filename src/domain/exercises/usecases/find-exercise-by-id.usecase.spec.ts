import { ExerciseNotFoundByIdException } from '../../exceptions/exercises/exercise-not-found-by-id.exception'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExerciseByIdUsecase } from './find-exercise-by-id.usecase'

describe('FindExerciseByIdUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let findExerciseByIdUsecase: FindExerciseByIdUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn(),
      findByBodyPart: jest.fn(),
      findByEquipment: jest.fn()
    }

    findExerciseByIdUsecase = new FindExerciseByIdUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should return the exercise with the given id', async () => {
      const expectedExercise: FindExerciseByIdUsecase.Output = { id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }
      jest.spyOn(exerciseRepository, 'findById').mockResolvedValue(expectedExercise)

      const input = '1'
      const output = await findExerciseByIdUsecase.execute(input)

      expect(output).toEqual(expectedExercise)
    })

    it('should throw an ExerciseNotFoundByIdException if no exercise is found with the given an id', async () => {
      jest.spyOn(exerciseRepository, 'findById').mockResolvedValue(null)

      const input = '1'
      await expect(findExerciseByIdUsecase.execute(input)).rejects.toThrow(ExerciseNotFoundByIdException)
    })
  })
})
