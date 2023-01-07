import { ExerciseNotFoundException } from '../../exceptions/exercises/exercise-not-found.exception'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExerciseByIdUsecase } from './find-exercise-by-id.usecase'

describe('FindExerciseByIdUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let findExerciseByIdUsecase: FindExerciseByIdUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn()
    }

    findExerciseByIdUsecase = new FindExerciseByIdUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should return the exercise with the given id', async () => {
      const expectedExercise: FindExerciseByIdUsecase.Output = { id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', gif: 'http://example' }
      jest.spyOn(exerciseRepository, 'findById').mockResolvedValue(expectedExercise)

      const input = { id: '1' }
      const output = await findExerciseByIdUsecase.execute(input)

      expect(output).toEqual(expectedExercise)
    })

    it('should throw an ExerciseNotFoundException if no exercise is found with the given id', async () => {
      jest.spyOn(exerciseRepository, 'findById').mockResolvedValue(null)

      const input = { id: '1' }
      await expect(findExerciseByIdUsecase.execute(input)).rejects.toThrow(ExerciseNotFoundException)
    })
  })
})
