import { adaptServerlessRoute, IHandlerContext, IHandlerEvent } from '@/main/adapters/serverless/serverless-route-adapter'
import { loadAwsSecrets } from '@/main/config/load-aws-secrets'
import { makeGetRotaTesteAuditoriaAtendimentoController } from '@/main/factories/controllers/rota-teste-auditoria-atendimento//get-rota-teste-auditoria-atendimento-controller-factory'
import { IHttpResponse } from '@/presentation/protocols'

export const getRotaTesteAuditoriaAtendimentoHandler = async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
  await loadAwsSecrets()
  const controller = makeGetRotaTesteAuditoriaAtendimentoController()
  return adaptServerlessRoute(controller)(event, context)
}
