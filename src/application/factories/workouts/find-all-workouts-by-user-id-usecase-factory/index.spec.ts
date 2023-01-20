import { FindAllWorkoutsByUserIdUsecase } from '@domain/usecases/workouts/find-all-workouts-by-user-id.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'
import { makeFindAllWorkoutsByUserIdUsecaseFactory } from './index'

describe('makeFindAllWorkoutsByUserIdUsecaseFactory', () => {
  it('should create an instance of FindAllWorkoutsByUserIdUsecase', () => {
    const findAllWorkoutsByUserIdUsecase = makeFindAllWorkoutsByUserIdUsecaseFactory()
    expect(findAllWorkoutsByUserIdUsecase).toBeInstanceOf(FindAllWorkoutsByUserIdUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findAllWorkoutsByUserIdUsecase = new FindAllWorkoutsByUserIdUsecase(workoutRepository, exerciseRepository)
    expect(findAllWorkoutsByUserIdUsecase).toBeInstanceOf(FindAllWorkoutsByUserIdUsecase)
  })
})
