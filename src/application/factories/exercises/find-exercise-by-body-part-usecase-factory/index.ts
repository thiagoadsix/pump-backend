import { FindExercisesByBodyPartUsecase } from '../../../../domain/exercises/usecases/find-exercises-by-body-part.usecase'
import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { ExerciseRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'

export const makeFindExercisesByBodyPartUsecaseFactory = (): FindExercisesByBodyPartUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
  return new FindExercisesByBodyPartUsecase(exerciseRepository)
}
