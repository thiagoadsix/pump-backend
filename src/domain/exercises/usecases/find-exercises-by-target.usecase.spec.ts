import { ExerciseRepositoryMock } from '../../workouts/mocks/exercise.repository.mock'
import { TargetTypeAggregate } from '../../aggregates'
import { ExerciseNotFoundByTargetException } from '../../exceptions/exercises/exercise-not-found-by-target.exception'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExercisesByTargetUsecase } from './find-exercises-by-target.usecase'

describe('FindExerciseByTargetUsecase', () => {
  let exerciseRepository: ExerciseRepository

  let sut: FindExercisesByTargetUsecase

  beforeEach(() => {
    exerciseRepository = new ExerciseRepositoryMock()

    sut = new FindExercisesByTargetUsecase(exerciseRepository)
  })

  it('should call FindByTarget with correct values', async () => {
    const exerciseRepositoryFindByTargetSpy = jest.spyOn(exerciseRepository, 'findByTarget')

    const input: TargetTypeAggregate = 'abs'
    await sut.execute(input)

    expect(exerciseRepositoryFindByTargetSpy).toHaveBeenCalledWith(input)
    expect(exerciseRepositoryFindByTargetSpy).toHaveBeenCalledTimes(1)
  })

  it('should throw an ExerciseNotFoundByTargetException if no exercise is found with the given target', async () => {
    jest.spyOn(exerciseRepository, 'findByTarget').mockResolvedValue([])

    const input: TargetTypeAggregate = 'abs'
    const result = sut.execute(input)
    await expect(result).rejects.toThrow(ExerciseNotFoundByTargetException)
  })
})
