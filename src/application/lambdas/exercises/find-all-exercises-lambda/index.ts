import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeFindAllExercisesUsecaseFactory } from '../../../factories/exercises/find-all-exercises-usecase-factory'

export async function handler (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const findAllExercisesUsecase = makeFindAllExercisesUsecaseFactory()
  const result = await findAllExercisesUsecase.execute()

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
