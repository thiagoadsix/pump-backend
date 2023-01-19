import { AddExerciseToWorkoutListUsecase } from '@domain/usecases/workouts/add-exercise-to-workout-list.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { makeAddExerciseToWorkoutListUsecaseFactory } from './index'

describe('makeAddExerciseToWorkoutListUsecaseFactory', () => {
  it('should create an instance of AddExerciseToWorkoutListUsecase', () => {
    const addExerciseToWorkoutListUsecase = makeAddExerciseToWorkoutListUsecaseFactory()
    expect(addExerciseToWorkoutListUsecase).toBeInstanceOf(AddExerciseToWorkoutListUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
    const addExerciseToWorkoutListUsecase = new AddExerciseToWorkoutListUsecase(workoutRepository)
    expect(addExerciseToWorkoutListUsecase).toBeInstanceOf(AddExerciseToWorkoutListUsecase)
  })
})
