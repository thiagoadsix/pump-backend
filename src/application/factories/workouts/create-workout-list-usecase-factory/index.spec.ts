import { CreateWorkoutListUsecase } from '@domain/workouts/usecases/create-workout-list.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { UUIDService } from '@infrastructure/services/uuid/uuid.service'
import { makeCreateWorkoutListUsecaseFactory } from './index'

describe('makeCreateWorkoutListUsecaseFactory', () => {
  it('should create an instance of CreateWorkoutListUsecase', () => {
    const createWorkoutListUsecase = makeCreateWorkoutListUsecaseFactory()
    expect(createWorkoutListUsecase).toBeInstanceOf(CreateWorkoutListUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const uuidService = new UUIDService()
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
    const createWorkoutListUsecase = new CreateWorkoutListUsecase(uuidService, workoutRepository)
    expect(createWorkoutListUsecase).toBeInstanceOf(CreateWorkoutListUsecase)
  })
})
