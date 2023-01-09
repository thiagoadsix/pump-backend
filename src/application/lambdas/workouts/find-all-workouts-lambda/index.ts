import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeFindAllWorkoutsUsecaseFactory } from '../../../factories/workouts/find-all-workouts-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const userId = event.pathParameters?.userId as string
  const usecase = makeFindAllWorkoutsUsecaseFactory()
  const result = await usecase.execute(userId)

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
