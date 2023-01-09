import { FindAllExercisesUsecase } from '../../../../domain/exercises/usecases/find-all-exercises.usecase'
import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { ExerciseRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'

export const makeFindAllExercisesUsecaseFactory = (): FindAllExercisesUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
  return new FindAllExercisesUsecase(exerciseRepository)
}
