import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeCreateUserUsecaseFactory } from '@application/factories/users/create-user-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  const { name, email, password } = JSON.parse(event.body as any)
  const usecase = makeCreateUserUsecaseFactory()
  const result = await usecase.execute({ name, email, password })

  return {
    statusCode: 201,
    body: JSON.stringify(result)
  }
}
