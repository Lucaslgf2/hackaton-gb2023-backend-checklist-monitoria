import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makePostMonitoriaController } from '@/main/factories/controllers/monitoria//post-monitoria-controller-factory'
import { makeGetMonitoriaController } from '@/main/factories/controllers/monitoria/get-monitoria-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getMonitoriaHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetMonitoriaController()
  return adaptServerlessRoute(controller)(event, context)
}

export const postMonitoriaHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makePostMonitoriaController()
  return adaptServerlessRoute(controller)(event, context)
}
