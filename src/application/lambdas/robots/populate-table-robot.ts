import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { AxiosGateway } from '../../../robots/axios-gateway'
import { PopulateTableRobot } from '../../../robots/populate-table-robot'

export async function handler (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const axios = new AxiosGateway({
    baseURL: process.env.EXERCISE_BASE_URL,
    headers: {
      'X-RapidAPI-Key': process.env.EXERCISE_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  })
  const robot = new PopulateTableRobot(axios)
  const result = await robot.execute()

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
