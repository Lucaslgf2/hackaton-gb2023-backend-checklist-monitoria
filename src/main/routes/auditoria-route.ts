import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetAuditoriaController } from '@/main/factories/controllers/auditoria//get-auditoria-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getAuditoriaHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetAuditoriaController()
  return adaptServerlessRoute(controller)(event, context)
}
