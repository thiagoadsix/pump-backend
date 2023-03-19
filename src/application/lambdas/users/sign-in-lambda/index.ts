import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeSignInUsecaseFactory } from '@application/factories/users/sign-in-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const { email, password } = JSON.parse(event.body as any)
  const usecase = makeSignInUsecaseFactory()
  const result = await usecase.execute({ email, password })

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
