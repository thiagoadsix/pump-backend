import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { ExerciseRepositoryMock } from '../../workouts/mocks/exercise.repository.mock'
import { FindAllExercisesUsecase } from './find-all-exercises.usecase'

describe('FindAllExercisesUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let sut: FindAllExercisesUsecase

  beforeEach(() => {
    exerciseRepository = new ExerciseRepositoryMock()

    sut = new FindAllExercisesUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should find all exercises', async () => {
      const exerciseRepositoryFindAllSpy = jest.spyOn(exerciseRepository, 'findAll')

      await sut.execute()

      expect(exerciseRepositoryFindAllSpy).toHaveBeenCalledTimes(1)
      expect(exerciseRepositoryFindAllSpy).toHaveBeenCalledWith()
    })
  })
})
