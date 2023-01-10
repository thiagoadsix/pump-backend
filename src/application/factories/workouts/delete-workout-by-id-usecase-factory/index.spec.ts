import { makeDeleteWorkoutByIdUsecaseFactory } from './index'
import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { DeleteWorkoutByIdUsecase } from '../../../../domain/workouts/usecases/delete-workout-by-id.usecase'

describe('makeDeleteWorkoutByIdUsecaseFactory', () => {
  it('should create an instance of DeleteWorkoutByIdUsecase', () => {
    const deleteWorkoutByIdUSecase = makeDeleteWorkoutByIdUsecaseFactory()
    expect(deleteWorkoutByIdUSecase).toBeInstanceOf(DeleteWorkoutByIdUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
    const deleteWorkoutByIdUsecase = new DeleteWorkoutByIdUsecase(workoutRepository)
    expect(deleteWorkoutByIdUsecase).toBeInstanceOf(DeleteWorkoutByIdUsecase)
  })
})
