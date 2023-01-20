import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeAddExerciseToWorkoutListUsecaseFactory } from '../../../factories/workouts/add-exercise-to-workout-list-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const id = event.pathParameters?.id as string
  const userId = event.pathParameters?.userId as string
  const body = JSON.parse(event.body as any)
  const usecase = makeAddExerciseToWorkoutListUsecaseFactory()
  await usecase.execute({ id, userId, ...body })

  return {
    statusCode: 201,
    body: JSON.stringify({})
  }
}
