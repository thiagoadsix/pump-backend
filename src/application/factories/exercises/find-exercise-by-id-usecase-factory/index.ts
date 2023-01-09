import { FindExerciseByIdUsecase } from '../../../../domain/exercises/usecases/find-exercise-by-id.usecase'
import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { ExerciseRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'

export const makeFindExerciseByIdUsecaseFactory = (): FindExerciseByIdUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
  return new FindExerciseByIdUsecase(exerciseRepository)
}
