import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetConsultorController } from '@/main/factories/controllers/consultor//get-consultor-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getConsultorHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetConsultorController()
  return adaptServerlessRoute(controller)(event, context)
}
