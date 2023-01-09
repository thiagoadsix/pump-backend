import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeFindExerciseByIdUsecaseFactory } from '../../../factories/exercises/find-exercise-by-id-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const id = event.pathParameters?.id as string
  const findAllExercisesUsecase = makeFindExerciseByIdUsecaseFactory()
  const result = await findAllExercisesUsecase.execute(id)

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
