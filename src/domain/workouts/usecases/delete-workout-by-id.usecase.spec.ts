import { WorkoutRepository } from 'src/domain/protocols/repositories/workout.repository'
import { dateMock } from '../mocks/date.mock'
import { WorkoutRepositoryMock } from '../mocks/workout.repository.mock'
import { DeleteWorkoutByIdUsecase } from './delete-workout-by-id.usecase'

describe('DeleteWorkoutByIdUsecase', () => {
  let workoutRepository: WorkoutRepository

  let sut: DeleteWorkoutByIdUsecase

  beforeEach(() => {
    dateMock()

    workoutRepository = new WorkoutRepositoryMock()
    sut = new DeleteWorkoutByIdUsecase(workoutRepository)
  })
  it('should call WorkoutRepository.delete with correct values', async () => {
    const workoutRepositoryDeleteSpy = jest.spyOn(workoutRepository, 'delete')
    const id = '123'
    const userId = '456'

    await sut.execute(id, userId)

    expect(workoutRepositoryDeleteSpy).toHaveBeenCalledWith(id, userId)
    expect(workoutRepositoryDeleteSpy).toHaveBeenCalledTimes(1)
  })
})
