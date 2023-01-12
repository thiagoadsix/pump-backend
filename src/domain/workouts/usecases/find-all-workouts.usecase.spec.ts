import { FindAllWorkoutsUsecase } from './find-all-workouts.usecase'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { Exercise } from '../../entities/exercise'
import { Workout } from '../../entities/workout'

describe('FindAllWorkoutsUsecase', () => {
  let workoutRepository: WorkoutRepository
  let exerciseRepository: ExerciseRepository
  let usecase: FindAllWorkoutsUsecase

  const exercise: Exercise = {
    id: 'exercise-id',
    name: 'exercise-name',
    target: 'abductors',
    equipment: 'assisted',
    bodyPart: 'back',
    url: 'http://example.com/0001'
  }

  const workout: Workout = {
    id: 'workout-id',
    userId: 'user-id',
    exerciseIds: ['exercise-id'],
    title: 'workout-title',
    createdAt: '2023-01-09T16:23:27.190Z'
  }

  beforeEach(() => {
    workoutRepository = {
      findAll: jest.fn().mockResolvedValue([workout]),
      save: jest.fn(),
      findById: jest.fn(),
      delete: jest.fn(),
      addExercise: jest.fn()
    }
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn(),
      findByBodyPart: jest.fn(),
      findByEquipment: jest.fn(),
      findByIds: jest.fn().mockResolvedValue([exercise])
    }
    usecase = new FindAllWorkoutsUsecase(workoutRepository, exerciseRepository)
  })

  it('should call workoutRepository.findAll with the given userId', async () => {
    await usecase.execute('user-id')

    expect(workoutRepository.findAll).toHaveBeenCalledWith('user-id')
  })

  it('should call exerciseRepository.findByIds with the exerciseIds from each workout', async () => {
    await usecase.execute('user-id')

    expect(exerciseRepository.findByIds).toHaveBeenCalledWith(['exercise-id'])
  })
})
