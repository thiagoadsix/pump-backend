import { FindAllWorkoutsUsecase } from './find-all-workouts.usecase'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { WorkoutRepositoryMock } from '../mocks/workout.repository.mock'
import { ExerciseRepositoryMock } from '../mocks/exercise.repository.mock'
import { dateMock } from '../mocks/date.mock'

describe('FindAllWorkoutsUsecase', () => {
  let workoutRepository: WorkoutRepository
  let exerciseRepository: ExerciseRepository
  let sut: FindAllWorkoutsUsecase

  beforeEach(() => {
    dateMock()

    workoutRepository = new WorkoutRepositoryMock()
    exerciseRepository = new ExerciseRepositoryMock()
    sut = new FindAllWorkoutsUsecase(workoutRepository, exerciseRepository)
  })

  it('should call workoutRepository.findAll with the given userId', async () => {
    const workoutRepositoryFindAllSpy = jest.spyOn(workoutRepository, 'findAll')
    await sut.execute('zzzz1111-xx22-tt33-pp44-yyyyyy555555')

    expect(workoutRepositoryFindAllSpy).toHaveBeenCalledWith('zzzz1111-xx22-tt33-pp44-yyyyyy555555')
  })

  it('should call exerciseRepository.findByIds with the exerciseIds from each workout', async () => {
    const exerciseRepositoryFindByIds = jest.spyOn(exerciseRepository, 'findByIds')
    await sut.execute('zzzz1111-xx22-tt33-pp44-yyyyyy555555')

    expect(exerciseRepositoryFindByIds).toHaveBeenCalledWith(['0001', '0002'])
  })
})
