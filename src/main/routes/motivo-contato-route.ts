import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetMotivoContatoController } from '@/main/factories/controllers/motivo-contato//get-motivo-contato-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getMotivoContatoHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetMotivoContatoController()
  return adaptServerlessRoute(controller)(event, context)
}
