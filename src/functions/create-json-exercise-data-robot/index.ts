import { AxiosGateway } from '@gateways/axios/axios-gateway'
import type { ValidatedEventAPIGatewayProxyEventPathParameters } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { CreateJsonExerciseDataRobot } from 'src/robots/create-json-exercise-data-robot'

const createJsonExerciseDataRobot: ValidatedEventAPIGatewayProxyEventPathParameters<null> = async (event) => {
  const axiosGateway = new AxiosGateway({
    baseURL: process.env.EXERCISE_BASE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.EXERCISE_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })
  const robot = new CreateJsonExerciseDataRobot(axiosGateway)

  return formatJSONResponse({
    data: await robot.execute(),
    event
  })
}

export const main = middyfy(createJsonExerciseDataRobot)
