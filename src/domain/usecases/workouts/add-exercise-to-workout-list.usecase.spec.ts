import { Workout } from '@domain/entities/workout'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { dateMock } from '../mocks/date.mock'
import { WorkoutRepositoryMock } from '../mocks/workout.repository.mock'
import { AddExerciseToWorkoutListUsecase } from './add-exercise-to-workout-list.usecase'

describe('AddExerciseToWorkoutListUsecase', () => {
  let workoutRepository: WorkoutRepository

  let input: AddExerciseToWorkoutListUsecase.Input
  let usecase: AddExerciseToWorkoutListUsecase

  beforeEach(() => {
    dateMock()

    input = {
      id: 'aaaa1111-bb22-cc33-dd44-eeeeee555555',
      userId: 'zzzz1111-xx22-tt33-pp44-yyyyyy555555',
      sets: [{
        id: 'set-id-mock',
        repetitions: 3,
        series: 10,
        weight: 10
      }]
    }

    workoutRepository = new WorkoutRepositoryMock()
    usecase = new AddExerciseToWorkoutListUsecase(workoutRepository)
  })

  test('should call workoutRepository.findById with the provided id and userId', async () => {
    const id = 'aaaa1111-bb22-cc33-dd44-eeeeee555555'
    const userId = 'zzzz1111-xx22-tt33-pp44-yyyyyy555555'

    const workoutRepositoryFindByIdAndUserIdSpy = jest.spyOn(workoutRepository, 'findByIdAndUserId')

    await usecase.execute(input)

    expect(workoutRepositoryFindByIdAndUserIdSpy).toHaveBeenCalledWith(id, userId)
    expect(workoutRepositoryFindByIdAndUserIdSpy).toHaveBeenCalledTimes(1)
  })

  test('should call workoutRepository.addExercise with the provided ids', async () => {
    const exercises: Workout = {
      id: 'aaaa1111-bb22-cc33-dd44-eeeeee555555',
      userId: 'zzzz1111-xx22-tt33-pp44-yyyyyy555555',
      name: 'Superior',
      sets: [{
        id: 'set-id-mock',
        repetitions: 3,
        series: 10,
        weight: 10
      }],
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }

    const workoutRepositoryAddExerciseSpy = jest.spyOn(workoutRepository, 'addExercise')

    await usecase.execute(input)

    expect(workoutRepositoryAddExerciseSpy).toHaveBeenCalledWith(exercises)
    expect(workoutRepositoryAddExerciseSpy).toHaveBeenCalledTimes(1)
  })
})
