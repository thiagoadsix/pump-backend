import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { AddExerciseToWorkoutListUsecase } from '@domain/workouts/usecases/add-exercise-to-workout-list.usecase'

export const makeAddExerciseToWorkoutListUsecaseFactory = (): AddExerciseToWorkoutListUsecase => {
  const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
  const exerciseRepository = new WorkoutsRepositoryDynamo(dynamoClient)
  return new AddExerciseToWorkoutListUsecase(exerciseRepository)
}
