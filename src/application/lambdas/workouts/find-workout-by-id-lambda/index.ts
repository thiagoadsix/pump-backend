import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeFindWorkoutByIdUsecaseFactory } from '../../../factories/workouts/find-workout-by-id-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const id = event.pathParameters?.id as string
  const usecase = makeFindWorkoutByIdUsecaseFactory()
  const result = await usecase.execute(id)

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
