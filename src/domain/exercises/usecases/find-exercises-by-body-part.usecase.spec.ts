import { ExerciseNotFoundByBodyPartException } from '../../exceptions/exercises/exercise-not-found-by-body-part.exception'
import { BodyPartTypeAggregate } from '../../aggregates'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindExercisesByBodyPartUsecase } from './find-exercises-by-body-part.usecase'
import { ExerciseRepositoryMock } from '../../workouts/mocks/exercise.repository.mock'

describe('FindExercisesByBodyPartUsecase', () => {
  let exerciseRepository: ExerciseRepository

  let sut: FindExercisesByBodyPartUsecase

  beforeEach(() => {
    exerciseRepository = new ExerciseRepositoryMock()

    sut = new FindExercisesByBodyPartUsecase(exerciseRepository)
  })

  it('should call ExerciseRepository.findByBodyPart with correct values', async () => {
    const exerciseRepositoryFindByBodyPartSpy = jest.spyOn(exerciseRepository, 'findByBodyPart')

    const input: BodyPartTypeAggregate = 'back'
    await sut.execute(input)

    expect(exerciseRepositoryFindByBodyPartSpy).toHaveBeenCalledTimes(1)
    expect(exerciseRepositoryFindByBodyPartSpy).toHaveBeenCalledWith(input)
  })

  it('should throw an ExerciseNotFoundByBodyPartException if no exercise is found with the given body part', async () => {
    jest.spyOn(exerciseRepository, 'findByBodyPart').mockResolvedValue([])

    const input: BodyPartTypeAggregate = 'back'
    const result = sut.execute(input)
    await expect(result).rejects.toThrow(ExerciseNotFoundByBodyPartException)
  })
})
