import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { FindAllWorkoutsUsecase } from '../../../../domain/workouts/usecases/find-all-workouts.usecase'
import { ExerciseRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'

export const makeFindAllWorkoutsUsecaseFactory = (): FindAllWorkoutsUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
  const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
  return new FindAllWorkoutsUsecase(workoutRepository, exerciseRepository)
}
