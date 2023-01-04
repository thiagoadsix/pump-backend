import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda'
import type { FromSchema } from 'json-schema-to-ts'

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

type ValidatedAPIGatewayProxyEventPathParameters<S> = Omit<APIGatewayProxyEvent, 'pathParameters'> & Record<string, S>
export type ValidatedEventAPIGatewayProxyEventPathParameters<S> = Handler<ValidatedAPIGatewayProxyEventPathParameters<S>, APIGatewayProxyResult>

export const formatJSONResponse = (response: Record<string, unknown>): { statusCode: number, body: string } => {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}
