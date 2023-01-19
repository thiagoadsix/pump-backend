import { FindAllExercisesUsecase } from '@domain/exercises/usecases/find-all-exercises.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'
import { makeFindAllExercisesUsecaseFactory } from './index'

describe('makeFindAllExercisesUsecaseFactory', () => {
  it('should create an instance of FindAllExercisesUsecase', () => {
    const findAllExercisesUsecase = makeFindAllExercisesUsecaseFactory()
    expect(findAllExercisesUsecase).toBeInstanceOf(FindAllExercisesUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findAllExercisesUsecase = new FindAllExercisesUsecase(exerciseRepository)
    expect(findAllExercisesUsecase).toBeInstanceOf(FindAllExercisesUsecase)
  })
})
