import { CreateWorkoutListUsecase } from './create-workout-list.usecase'
import { UUIDService } from '../../protocols/services/uuid.service'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'

describe('CreateWorkoutListUsecase', () => {
  let usecase: CreateWorkoutListUsecase
  let uuidService: UUIDService
  let workoutRepository: WorkoutRepository

  beforeEach(() => {
    uuidService = {
      v4: jest.fn().mockResolvedValue('mock-id')
    }
    workoutRepository = {
      save: jest.fn()
    }
    usecase = new CreateWorkoutListUsecase(uuidService, workoutRepository)
  })

  it('creates a new workout and saves it to the repository', async () => {
    const fixedDate = new Date('2023-01-09T16:23:27.190Z')
    jest.spyOn(global, 'Date').mockImplementation(() => fixedDate)

    const input = {
      userId: 'user-id',
      exerciseIds: ['exercise-id-1', 'exercise-id-2'],
      title: 'Workout Title'
    }
    const expectedWorkout: Workout = {
      id: 'mock-id',
      title: 'Workout Title',
      exerciseIds: ['exercise-id-1', 'exercise-id-2'],
      userId: 'user-id',
      createdAt: '2023-01-09T16:23:27.190Z'
    }
    await usecase.execute(input)
    expect(workoutRepository.save).toHaveBeenCalledWith(expectedWorkout)
  })
})
