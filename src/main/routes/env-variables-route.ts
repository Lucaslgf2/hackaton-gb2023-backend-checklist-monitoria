import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetEnvVariablesController } from '@/main/factories/controllers/env-variables/get-env-variables-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getEnvVariablesHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetEnvVariablesController()
  return adaptServerlessRoute(controller)(event, context)
}
