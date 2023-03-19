import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { PopulateS3WithGifsRobot } from 'src/robots/populate-s3-with-gifs-robot'

export async function handler (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const robot = new PopulateS3WithGifsRobot()
  const result = await robot.execute()

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
