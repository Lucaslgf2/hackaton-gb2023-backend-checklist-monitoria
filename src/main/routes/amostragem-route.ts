import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetAmostragemController } from '@/main/factories/controllers/amostragem//get-amostragem-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getAmostragemHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetAmostragemController()
  return adaptServerlessRoute(controller)(event, context)
}
