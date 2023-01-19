import { FindExercisesByBodyPartUsecase } from '@domain/usecases/exercises/find-exercises-by-body-part.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'
import { makeFindExercisesByBodyPartUsecaseFactory } from './index'

describe('makeFindExercisesByBodyPartUsecaseFactory', () => {
  it('should create an instance of FindExercisesByBodyPartUsecase', () => {
    const findExercisesByBodyPartUsecase = makeFindExercisesByBodyPartUsecaseFactory()
    expect(findExercisesByBodyPartUsecase).toBeInstanceOf(FindExercisesByBodyPartUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findExercisesByBodyPartUsecase = new FindExercisesByBodyPartUsecase(exerciseRepository)
    expect(findExercisesByBodyPartUsecase).toBeInstanceOf(FindExercisesByBodyPartUsecase)
  })
})
