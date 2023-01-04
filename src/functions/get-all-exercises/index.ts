import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { S3Gateway } from '@gateways/aws/s3-gateway'
import { ExerciseService } from '@services/exercise-service'

const getAllExercise: ValidatedEventAPIGatewayProxyEvent<null> = async (event) => {
  const s3Gateway = new S3Gateway()
  const exerciseService = new ExerciseService(s3Gateway)

  return formatJSONResponse({
    data: await exerciseService.getAllExercises(),
    event
  })
}

export const main = middyfy(getAllExercise)
