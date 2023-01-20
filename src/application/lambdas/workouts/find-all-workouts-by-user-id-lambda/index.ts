import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeFindAllWorkoutsByUserIdUsecaseFactory } from '../../../factories/workouts/find-all-workouts-by-user-id-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const userId = event.pathParameters?.userId as string
  const usecase = makeFindAllWorkoutsByUserIdUsecaseFactory()
  const result = await usecase.execute(userId)

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
