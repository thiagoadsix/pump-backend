import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from 'src/infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { FindAllWorkoutsUsecase } from '../../../../domain/workouts/usecases/find-all-workouts.usecase'

export const makeFindAllWorkoutsUsecaseFactory = (): FindAllWorkoutsUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new WorkoutsRepositoryDynamo(dynamoClient)
  return new FindAllWorkoutsUsecase(exerciseRepository)
}
