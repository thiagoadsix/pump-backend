import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeCreateWorkoutListUsecaseFactoryCreateWorkoutListUsecase } from '../../../factories/workouts/create-workout-list-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const input = JSON.parse(event.body as any)
  const usecase = makeCreateWorkoutListUsecaseFactoryCreateWorkoutListUsecase()
  await usecase.execute(input)

  return {
    statusCode: 201,
    body: JSON.stringify({})
  }
}
