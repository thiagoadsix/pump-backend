import middy from '@middy/core'
import middyJsonBodyParser from '@middy/http-json-body-parser'

export const middyfy = (handler): middy.MiddyfiedHandler => {
  return middy(handler).use(middyJsonBodyParser())
}
