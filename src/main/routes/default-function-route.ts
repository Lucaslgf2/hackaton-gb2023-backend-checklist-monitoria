import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { adaptRouteCache } from '@/main/adapters/serverless/serverless-route-cache'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetDefaultFunctionController } from '@/main/factories/controllers/default-function//get-default-function-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getDefaultFunctionHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetDefaultFunctionController()
  return adaptRouteCache(adaptServerlessRoute(controller))(event, context)
}
