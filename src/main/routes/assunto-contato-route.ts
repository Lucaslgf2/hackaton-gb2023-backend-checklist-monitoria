import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetAssuntoContatoController } from '@/main/factories/controllers/assunto-contato//get-assunto-contato-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getAssuntoContatoHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetAssuntoContatoController()
  return adaptServerlessRoute(controller)(event, context)
}
