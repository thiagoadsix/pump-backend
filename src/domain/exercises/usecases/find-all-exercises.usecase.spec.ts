import { ExerciseRepository } from 'src/domain/protocols/repositories/exercise.repository'
import { FindAllExercisesUsecase } from './find-all-exercises.usecase'

describe('FindAllExercisesUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let findAllExercisesUsecase: FindAllExercisesUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn(),
      findByBodyPart: jest.fn(),
      findByEquipment: jest.fn()
    }

    findAllExercisesUsecase = new FindAllExercisesUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should find all exercises', async () => {
      const expectedExercise: FindAllExercisesUsecase.Output = [{ id: '1', name: 'Push-ups', target: 'abs', equipment: 'band', bodyPart: 'back', url: 'http://example' }]
      jest.spyOn(exerciseRepository, 'findAll').mockResolvedValue(expectedExercise)

      const output = await findAllExercisesUsecase.execute()

      expect(output).toEqual(expectedExercise)
    })
  })
})
