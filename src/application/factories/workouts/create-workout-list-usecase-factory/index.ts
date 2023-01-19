import { CreateWorkoutListUsecase } from '@domain/usecases/workouts/create-workout-list.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { UUIDService } from '@infrastructure/services/uuid/uuid.service'

export const makeCreateWorkoutListUsecaseFactory = (): CreateWorkoutListUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new WorkoutsRepositoryDynamo(dynamoClient)
  const uuidService = new UUIDService()
  return new CreateWorkoutListUsecase(uuidService, exerciseRepository)
}
