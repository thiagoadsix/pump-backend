import { FindAllWorkoutsUsecase } from '@domain/workouts/usecases/find-all-workouts.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'
import { makeFindAllWorkoutsUsecaseFactory } from './index'

describe('makeFindAllWorkoutsUsecaseFactory', () => {
  it('should create an instance of FindAllWorkoutsUsecase', () => {
    const findAllWorkoutsUsecase = makeFindAllWorkoutsUsecaseFactory()
    expect(findAllWorkoutsUsecase).toBeInstanceOf(FindAllWorkoutsUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findAllWorkoutsUsecase = new FindAllWorkoutsUsecase(workoutRepository, exerciseRepository)
    expect(findAllWorkoutsUsecase).toBeInstanceOf(FindAllWorkoutsUsecase)
  })
})
