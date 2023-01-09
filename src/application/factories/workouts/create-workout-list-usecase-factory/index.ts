import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { CreateWorkoutListUsecase } from '../../../../domain/workouts/usecases/create-workout-list.usecase'
import { WorkoutsRepositoryDynamo } from 'src/infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { UUIDService } from '../../../../infrastructure/services/uuid/uuid.service'

export const makeCreateWorkoutListUsecaseFactoryCreateWorkoutListUsecase = (): CreateWorkoutListUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new WorkoutsRepositoryDynamo(dynamoClient)
  const uuidService = new UUIDService()
  return new CreateWorkoutListUsecase(uuidService, exerciseRepository)
}
