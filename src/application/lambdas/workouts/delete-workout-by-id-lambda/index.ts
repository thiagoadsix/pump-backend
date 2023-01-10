import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeDeleteWorkoutByIdUsecaseFactory } from '../../../../application/factories/workouts/delete-workout-by-id-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const id = event.pathParameters?.id as string
  const userId = event.pathParameters?.userId as string
  const usecase = makeDeleteWorkoutByIdUsecaseFactory()
  await usecase.execute(id, userId)

  return {
    statusCode: 201,
    body: JSON.stringify({})
  }
}
