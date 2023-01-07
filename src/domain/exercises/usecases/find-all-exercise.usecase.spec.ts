import { ExerciseRepository } from 'src/domain/protocols/repositories/exercise.repository'
import { FindAllExerciseUsecase } from './find-all-exercise.usecase'

describe('FindAllExerciseUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let findAllExerciseUsecase: FindAllExerciseUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn()
    }

    findAllExerciseUsecase = new FindAllExerciseUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should find all exercises', async () => {
      const expectedExercise: FindAllExerciseUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', gif: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findAll').mockResolvedValue(expectedExercise)

      const output = await findAllExerciseUsecase.execute()

      expect(output).toEqual(expectedExercise)
    })
  })
})
