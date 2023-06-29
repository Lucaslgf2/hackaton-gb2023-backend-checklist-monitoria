import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetMonitorController } from '@/main/factories/controllers/monitor//get-monitor-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getMonitorHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetMonitorController()
  return adaptServerlessRoute(controller)(event, context)
}
