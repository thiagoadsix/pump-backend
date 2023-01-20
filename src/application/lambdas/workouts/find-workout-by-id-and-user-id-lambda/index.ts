import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeFindWorkoutByIAndUserIddUsecaseFactory } from '../../../factories/workouts/find-workout-by-id-and-user-id-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const id = event.pathParameters?.id as string
  const userId = event.pathParameters?.userId as string
  const usecase = makeFindWorkoutByIAndUserIddUsecaseFactory()
  const result = await usecase.execute({ id, userId })

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
