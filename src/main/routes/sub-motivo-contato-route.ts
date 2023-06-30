import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetSubMotivoContatoController } from '@/main/factories/controllers/sub-motivo-contato//get-sub-motivo-contato-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getSubMotivoContatoHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetSubMotivoContatoController()
  return adaptServerlessRoute(controller)(event, context)
}
