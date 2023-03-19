import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { makeSignUpUsecaseFactory } from '@application/factories/users/sign-up-usecase-factory'

export async function handler (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  try {
    const { name, email, password } = JSON.parse(event.body as any)
    const usecase = makeSignUpUsecaseFactory()
    const result = await usecase.execute({ name, email, password })

    return {
      statusCode: 201,
      body: JSON.stringify(result)
    }
  } catch (error) {
    if (error.name === 'FirebaseError' && error.code === 'auth/invalid-email') {
      return {
        statusCode: 400,
        body: JSON.stringify({ name: error.name, code: '0001', message: 'Invalid email.' })
      }
    }

    if (error.name === 'FirebaseError' && error.code === 'auth/weak-password') {
      return {
        statusCode: 400,
        body: JSON.stringify({ name: error.name, code: '0002', message: 'Weak password.' })
      }
    }

    if (error.name === 'FirebaseError' && error.code === 'auth/email-already-in-use') {
      return {
        statusCode: 422,
        body: JSON.stringify({ name: error.name, code: '0003', message: 'Email already exists.' })
      }
    }

    return {
      statusCode: 502,
      body: JSON.stringify(error)
    }
  }
}
