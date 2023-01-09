import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { TargetTypeAggregate } from '../../../../domain/aggregates'
import { makeFindExercisesByTargetUsecaseFactory } from '../../../factories/exercises/find-exercise-by-target-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const target = event.pathParameters?.which as TargetTypeAggregate
  const findAllExercisesUsecase = makeFindExercisesByTargetUsecaseFactory()
  const result = await findAllExercisesUsecase.execute(target)

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
