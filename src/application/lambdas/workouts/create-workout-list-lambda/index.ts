import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeCreateWorkoutListUsecaseFactoryCreateWorkoutListUsecase } from 'src/application/factories/workouts/create-workout-list-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const input = JSON.parse(event.body as any)
  const findExerciseByTarget = makeCreateWorkoutListUsecaseFactoryCreateWorkoutListUsecase()
  await findExerciseByTarget.execute(input)

  return {
    statusCode: 201,
    body: JSON.stringify({})
  }
}
