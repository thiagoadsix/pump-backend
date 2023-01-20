import { FindWorkoutByIAndUserIddUsecase } from '@domain/usecases/workouts/find-workout-by-id-and-user-id.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'
import { makeFindWorkoutByIAndUserIddUsecaseFactory } from './index'

describe('makeFindWorkoutByIAndUserIddUsecaseFactory', () => {
  it('should create an instance of FindWorkoutByIAndUserIddUsecase', () => {
    const findWorkoutByIAndUserIddUsecase = makeFindWorkoutByIAndUserIddUsecaseFactory()
    expect(findWorkoutByIAndUserIddUsecase).toBeInstanceOf(FindWorkoutByIAndUserIddUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findWorkoutByIAndUserIddUsecase = new FindWorkoutByIAndUserIddUsecase(workoutRepository, exerciseRepository)
    expect(findWorkoutByIAndUserIddUsecase).toBeInstanceOf(FindWorkoutByIAndUserIddUsecase)
  })
})
