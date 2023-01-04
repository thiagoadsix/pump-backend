import type { ValidatedEventAPIGatewayProxyEventPathParameters } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { S3Gateway } from '@gateways/aws/s3-gateway'
import { ExerciseService } from '@services/exercise-service'

const getById: ValidatedEventAPIGatewayProxyEventPathParameters<{ id: string }> = async (event) => {
  const s3Gateway = new S3Gateway()
  const exerciseService = new ExerciseService(s3Gateway)

  const { id } = event.pathParameters

  return formatJSONResponse({
    data: await exerciseService.getById(id),
    event
  })
}

export const main = middyfy(getById)
