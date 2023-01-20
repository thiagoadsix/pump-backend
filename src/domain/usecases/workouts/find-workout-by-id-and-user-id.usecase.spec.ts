import { WorkoutNotFoundByIdAndUserIdException } from '../../exceptions/workouts/workout-not-found-by-id-and-user-id.exceptions'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindWorkoutByIdAndUserIdUsecase } from './find-workout-by-id-and-user-id.usecase'
import { dateMock } from '../mocks/date.mock'
import { ExerciseRepositoryMock } from '../mocks/exercise.repository.mock'
import { WorkoutRepositoryMock } from '../mocks/workout.repository.mock'

describe('FindWorkoutByIdAndUserIdUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let workoutRepository: WorkoutRepository

  let sut: FindWorkoutByIdAndUserIdUsecase

  beforeEach(() => {
    dateMock()

    exerciseRepository = new ExerciseRepositoryMock()
    workoutRepository = new WorkoutRepositoryMock()

    sut = new FindWorkoutByIdAndUserIdUsecase(workoutRepository, exerciseRepository)
  })

  it('should return the workout with the given id and userId', async () => {
    const workoutRepositoryFindByIdAndUserIdSpy = jest.spyOn(workoutRepository, 'findByIdAndUserId')

    const id = 'aaaa1111-bb22-cc33-dd44-eeeeee555555'
    const userId = 'zzzz1111-xx22-tt33-pp44-yyyyyy555555'
    await sut.execute({ id, userId })

    expect(workoutRepositoryFindByIdAndUserIdSpy).toBeCalledWith(id, userId)
  })

  it('should throw an WorkoutNotFoundByIdAndUserIdException if no exercise is found with the given an id', async () => {
    jest.spyOn(workoutRepository, 'findByIdAndUserId').mockResolvedValue(null)

    const id = 'aaaa1111-bb22-cc33-dd44-eeeeee555555'
    const userId = 'zzzz1111-xx22-tt33-pp44-yyyyyy555555'
    const result = sut.execute({ id, userId })
    await expect(result).rejects.toThrow(WorkoutNotFoundByIdAndUserIdException)
  })
})
