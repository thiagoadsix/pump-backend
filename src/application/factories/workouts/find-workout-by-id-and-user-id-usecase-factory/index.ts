import { FindWorkoutByIAndUserIddUsecase } from '@domain/usecases/workouts/find-workout-by-id-and-user-id.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'

export const makeFindWorkoutByIAndUserIddUsecaseFactory = (): FindWorkoutByIAndUserIddUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
  const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
  return new FindWorkoutByIAndUserIddUsecase(workoutRepository, exerciseRepository)
}
