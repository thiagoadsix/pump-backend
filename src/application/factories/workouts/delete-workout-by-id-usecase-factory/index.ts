import { DeleteWorkoutByIdUsecase } from '@domain/usecases/workouts/delete-workout-by-id.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'

export const makeDeleteWorkoutByIdUsecaseFactory = (): DeleteWorkoutByIdUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
  return new DeleteWorkoutByIdUsecase(workoutRepository)
}
