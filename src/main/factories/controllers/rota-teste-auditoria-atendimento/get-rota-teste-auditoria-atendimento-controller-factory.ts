import { makeFindRotaTesteAuditoriaAtendimento } from '@/main/factories/use-cases/rota-teste-auditoria-atendimento/find-rota-teste-auditoria-atendimento-factory'
import { GetRotaTesteAuditoriaAtendimentoController } from '@/presentation/controllers/rota-teste-auditoria-atendimento/get-rota-teste-auditoria-atendimento-controller'
import { IController } from '@/presentation/protocols'
import { makeGetRotaTesteAuditoriaAtendimentoValidation } from './validation/get-rota-teste-auditoria-atendimento-validation-factory'

export const makeGetRotaTesteAuditoriaAtendimentoController = (): IController => {
  return new GetRotaTesteAuditoriaAtendimentoController(makeGetRotaTesteAuditoriaAtendimentoValidation(), makeFindRotaTesteAuditoriaAtendimento())
}
