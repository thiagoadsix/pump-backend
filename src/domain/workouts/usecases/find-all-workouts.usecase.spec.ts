import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { FindAllWorkoutsUsecase } from './find-all-workouts.usecase'

describe('FindAllWorkoutsUsecase', () => {
  let usecase: FindAllWorkoutsUsecase
  let workoutRepositoryMock: WorkoutRepository

  beforeEach(() => {
    workoutRepositoryMock = {
      save: jest.fn(),
      findAll: jest.fn()
    }
    usecase = new FindAllWorkoutsUsecase(workoutRepositoryMock)
  })

  it('should call the workoutRepository findAll method with the userId as argument', async () => {
    const userId = 'user-1'
    await usecase.execute(userId)
    expect(workoutRepositoryMock.findAll).toHaveBeenCalledWith(userId)
  })

  it('should return the result from the workoutRepository findAll method', async () => {
    const userId = 'user-1'
    const workouts = [{ id: 'workout-1', userId, exerciseIds: [], title: '', createdAt: '' }]
    jest.spyOn(workoutRepositoryMock, 'findAll').mockResolvedValue(workouts)
    const result = await usecase.execute(userId)
    expect(result).toEqual(workouts)
  })
})
