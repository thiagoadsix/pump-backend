import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { EquipmentTypeAggregate } from '@domain/aggregates'
import { makeFindExercisesByEquipmentUsecaseFactory } from '../../../factories/exercises/find-exercise-by-equipment-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const target = event.pathParameters?.which as EquipmentTypeAggregate
  const findExerciseByEquipment = makeFindExercisesByEquipmentUsecaseFactory()
  const result = await findExerciseByEquipment.execute(target)

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
