import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { WorkoutRepositoryMock } from '../mocks/workout.repository.mock'
import { AddExerciseToWorkoutListUsecase } from './add-exercise-to-workout-list.usecase'

describe('AddExerciseToWorkoutListUsecase', () => {
  let workoutRepository: WorkoutRepository
  let usecase: AddExerciseToWorkoutListUsecase

  beforeEach(() => {
    workoutRepository = new WorkoutRepositoryMock()
    usecase = new AddExerciseToWorkoutListUsecase(workoutRepository)
  })

  test('should call workoutRepository.addExercise with the provided ids', async () => {
    const exerciseIds = ['ex1', 'ex2']
    const addExerciseSpy = jest.spyOn(workoutRepository, 'addExercise')

    await usecase.execute('id', exerciseIds)

    expect(addExerciseSpy).toHaveBeenCalledWith('id', exerciseIds)
  })
})
