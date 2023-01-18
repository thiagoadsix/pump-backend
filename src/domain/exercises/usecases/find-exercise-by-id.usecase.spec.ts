import { ExerciseRepositoryMock } from '../../workouts/mocks/exercise.repository.mock'
import { ExerciseNotFoundByIdException } from '../../exceptions/exercises/exercise-not-found-by-id.exception'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExerciseByIdUsecase } from './find-exercise-by-id.usecase'

describe('FindExerciseByIdUsecase', () => {
  let exerciseRepository: ExerciseRepository

  let sut: FindExerciseByIdUsecase

  beforeEach(() => {
    exerciseRepository = new ExerciseRepositoryMock()

    sut = new FindExerciseByIdUsecase(exerciseRepository)
  })

  describe('execute', () => {
    it('should return the exercise with the given id', async () => {
      const exerciseRepositoryFindByIdSpy = jest.spyOn(exerciseRepository, 'findById')

      const input = '1'
      await sut.execute(input)

      expect(exerciseRepositoryFindByIdSpy).toHaveBeenCalledTimes(1)
      expect(exerciseRepositoryFindByIdSpy).toHaveBeenCalledWith(input)
    })

    it('should throw an ExerciseNotFoundByIdException if no exercise is found with the given an id', async () => {
      jest.spyOn(exerciseRepository, 'findById').mockResolvedValue(null)

      const input = '1'
      const result = sut.execute(input)

      await expect(result).rejects.toThrow(ExerciseNotFoundByIdException)
    })
  })
})
