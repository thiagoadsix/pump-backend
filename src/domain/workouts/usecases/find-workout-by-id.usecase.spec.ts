import { WorkoutNotFoundByIdException } from '../../exceptions/workouts/workout-not-found-by-id.exceptions'
import { WorkoutRepository } from '../../protocols/repositories/workout.repository'
import { ExerciseRepository } from '../../protocols/repositories/exercise.repository'
import { FindWorkoutByIdUsecase } from './find-workout-by-id.usecase'

describe('FindWorkoutByIdUsecase', () => {
  let exerciseRepository: ExerciseRepository
  let workoutRepository: WorkoutRepository
  let findWorkoutByIdUsecase: FindWorkoutByIdUsecase

  beforeEach(() => {
    exerciseRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
      findByTarget: jest.fn(),
      findByBodyPart: jest.fn(),
      findByEquipment: jest.fn(),
      findByIds: jest.fn()
    }

    workoutRepository = {
      findById: jest.fn(),
      delete: jest.fn(),
      findAll: jest.fn(),
      save: jest.fn(),
      addExercise: jest.fn()
    }

    findWorkoutByIdUsecase = new FindWorkoutByIdUsecase(workoutRepository, exerciseRepository)
  })

  describe('execute', () => {
    it('should return the workout with the given id', async () => {
      const expectedWorkout: FindWorkoutByIdUsecase.Output = {
        id: '1',
        title: 'Workout Title',
        userId: '1',
        exerciseIds: ['0001'],
        exercises: undefined,
        createdAt: new Date().toISOString()
      } as any
      jest.spyOn(workoutRepository, 'findById').mockResolvedValue(expectedWorkout)

      const input = '1'
      const output = await findWorkoutByIdUsecase.execute(input)

      expect(output).toEqual(expectedWorkout)
    })

    it('should throw an WorkoutNotFoundByIdException if no exercise is found with the given an id', async () => {
      jest.spyOn(workoutRepository, 'findById').mockResolvedValue(null)

      const input = '1'
      await expect(findWorkoutByIdUsecase.execute(input)).rejects.toThrow(WorkoutNotFoundByIdException)
    })
  })
})
