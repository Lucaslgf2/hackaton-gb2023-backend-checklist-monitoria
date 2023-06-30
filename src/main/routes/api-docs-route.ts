import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { makeGetApiDocsController } from '@/main/factories/controllers/api-docs/get-api-docs-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getApiDocsHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  const controller = makeGetApiDocsController()
  return adaptServerlessRoute(controller)(event, context)
}
