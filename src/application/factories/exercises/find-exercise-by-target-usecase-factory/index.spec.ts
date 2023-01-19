import { FindExercisesByTargetUsecase } from '@domain/exercises/usecases/find-exercises-by-target.usecase'
import { DynamoClient, DynamoClientStageType } from '@infrastructure/databases/dynamo/dynamo-client'
import { ExerciseRepositoryDynamo } from '@infrastructure/databases/dynamo/repositories/exercises/exercise.repository.dynamo'
import { makeFindExercisesByTargetUsecaseFactory } from './index'

describe('makeFindExercisesByTargetUsecaseFactory', () => {
  it('should create an instance of FindExercisesByTargetUsecase', () => {
    const findExercisesByTargetUsecase = makeFindExercisesByTargetUsecaseFactory()
    expect(findExercisesByTargetUsecase).toBeInstanceOf(FindExercisesByTargetUsecase)
  })

  it('should create an instance of DynamoClient with the correct stage', () => {
    process.env.STAGE = 'local'
    const dynamoClient = new DynamoClient(String(process.env.STAGE) as DynamoClientStageType)
    const exerciseRepository = new ExerciseRepositoryDynamo(dynamoClient)
    const findExercisesByTargetUsecase = new FindExercisesByTargetUsecase(exerciseRepository)
    expect(findExercisesByTargetUsecase).toBeInstanceOf(FindExercisesByTargetUsecase)
  })
})
