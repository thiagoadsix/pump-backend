import { WorkoutNotFoundByIdException } from '../../exceptions/workouts/workout-not-found-by-id.exceptions'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindWorkoutByIdUsecase } from './find-workout-by-id.usecase'
import { dateMock } from '../mocks/date.mock'
import { ExerciseRepositoryMock } from '../mocks/exercise.repository.mock'
import { WorkoutRepositoryMock } from '../mocks/workout.repository.mock'

describe('FindWorkoutByIdUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let workoutRepository: WorkoutRepository

  let sut: FindWorkoutByIdUsecase

  beforeEach(() => {
    dateMock()

    exerciseRepository = new ExerciseRepositoryMock()
    workoutRepository = new WorkoutRepositoryMock()

    sut = new FindWorkoutByIdUsecase(workoutRepository, exerciseRepository)
  })

  it('should return the workout with the given id', async () => {
    const workoutRepositoryFindByIdSpy = jest.spyOn(workoutRepository, 'findById')

    const input = 'aaaa1111-bb22-cc33-dd44-eeeeee555555'
    await sut.execute(input)

    expect(workoutRepositoryFindByIdSpy).toBeCalledWith(input)
  })

  it('should throw an WorkoutNotFoundByIdException if no exercise is found with the given an id', async () => {
    jest.spyOn(workoutRepository, 'findById').mockResolvedValue(null)

    const input = 'aaaa1111-bb22-cc33-dd44-eeeeee555555'
    const result = sut.execute(input)
    await expect(result).rejects.toThrow(WorkoutNotFoundByIdException)
  })
})
