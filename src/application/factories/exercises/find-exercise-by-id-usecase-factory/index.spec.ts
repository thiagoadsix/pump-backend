import { FindExerciseByIdUsecase } from '@domain/exercises/usecases/find-exercise-by-id.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'
import { makeFindExerciseByIdUsecaseFactory } from './index'

describe('makeFindExerciseByIdUsecaseFactory', () => {
  it('should create an instance of FindExerciseByIdUsecase', () => {
    const findExerciseByIdUsecase = makeFindExerciseByIdUsecaseFactory()
    expect(findExerciseByIdUsecase).toBeInstanceOf(FindExerciseByIdUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findExerciseByIdUsecase = new FindExerciseByIdUsecase(exerciseRepository)
    expect(findExerciseByIdUsecase).toBeInstanceOf(FindExerciseByIdUsecase)
  })
})
