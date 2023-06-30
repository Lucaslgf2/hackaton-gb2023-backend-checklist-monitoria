import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { makeGetSwaggerJsonController } from '@/main/factories/controllers/api-docs/get-swagger-json-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getSwaggerJsonHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  const controller = makeGetSwaggerJsonController()
  return adaptServerlessRoute(controller)(event, context)
}
