import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { BodyPartTypeAggregate } from '@domain/aggregates'
import { makeFindExercisesByBodyPartUsecaseFactory } from '../../../factories/exercises/find-exercise-by-body-part-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const target = event.pathParameters?.which as BodyPartTypeAggregate
  const findExerciseByBodyPart = makeFindExercisesByBodyPartUsecaseFactory()
  const result = await findExerciseByBodyPart.execute(target)

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
