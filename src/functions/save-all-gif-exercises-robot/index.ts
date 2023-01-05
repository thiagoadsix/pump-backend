import type { ValidatedEventAPIGatewayProxyEventPathParameters } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { SaveAllGifExercisesRobot } from 'src/robots/save-all-gif-exercises-robot'

const saveAllGifExercisesRobot: ValidatedEventAPIGatewayProxyEventPathParameters<null> = async (event) => {
  const robot = new SaveAllGifExercisesRobot()

  return formatJSONResponse({
    data: await robot.execute(),
    event
  })
}

export const main = middyfy(saveAllGifExercisesRobot)
