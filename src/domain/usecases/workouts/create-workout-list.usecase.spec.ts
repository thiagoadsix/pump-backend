import { CreateWorkoutListUsecase } from './create-workout-list.usecase'
import { UUIDService } from '../../protocols/services/uuid.service'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Workout } from '../../entities/workout'
import { WorkoutRepositoryMock } from '../mocks/workout.repository.mock'
import { UUIDServiceMock } from '../mocks/uuid.service.mock'
import { dateMock } from '../mocks/date.mock'

describe('CreateWorkoutListUsecase', () => {
  let uuidService: UUIDService
  let workoutRepository: WorkoutRepository

  let input: CreateWorkoutListUsecase.Input
  let sut: CreateWorkoutListUsecase

  beforeEach(() => {
    dateMock()

    input = {
      title: 'Workout Title Test',
      userId: 'user-id-mock',
      exerciseIds: ['0001', '0002']
    }

    uuidService = new UUIDServiceMock()
    workoutRepository = new WorkoutRepositoryMock()
    sut = new CreateWorkoutListUsecase(uuidService, workoutRepository)
  })

  it('should call UUIDService.v4 one time', async () => {
    const uuidServiceV4Spy = jest.spyOn(uuidService, 'v4')
    await sut.execute(input)
    expect(uuidServiceV4Spy).toHaveBeenCalledTimes(1)
  })

  it('should call WorkoutRepository.save with correct values', async () => {
    const workoutRepositorySaveSpy = jest.spyOn(workoutRepository, 'save')
    const workout: Workout = {
      id: await uuidService.v4(),
      title: 'Workout Title Test',
      userId: 'user-id-mock',
      exerciseIds: ['0001', '0002'],
      createdAt: new Date().toISOString()
    }

    await sut.execute(input)
    expect(workoutRepositorySaveSpy).toHaveBeenCalledTimes(1)
    expect(workoutRepositorySaveSpy).toHaveBeenCalledWith(workout)
  })
})
