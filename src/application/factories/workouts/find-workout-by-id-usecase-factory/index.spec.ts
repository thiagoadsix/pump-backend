import { makeFindWorkoutByIdUsecaseFactory } from './index'
import { DynamoClient, DynamoClientStageType } from '../../../../infrastructure/databases/dynamo/dynamo-client'
import { WorkoutsRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/workouts/workouts.repository.dynamo'
import { FindWorkoutByIdUsecase } from '../../../../domain/workouts/usecases/find-workout-by-id.usecase'
import { ExerciseRepositoryDynamo } from '../../../../infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'

describe('makeFindWorkoutByIdUsecaseFactory', () => {
  it('should create an instance of FindWorkoutByIdUsecase', () => {
    const findWorkoutByIdUsecase = makeFindWorkoutByIdUsecaseFactory()
    expect(findWorkoutByIdUsecase).toBeInstanceOf(FindWorkoutByIdUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const workoutRepository = new WorkoutsRepositoryDynamo(dynamoClient)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findWorkoutByIdUsecase = new FindWorkoutByIdUsecase(workoutRepository, exerciseRepository)
    expect(findWorkoutByIdUsecase).toBeInstanceOf(FindWorkoutByIdUsecase)
  })
})
