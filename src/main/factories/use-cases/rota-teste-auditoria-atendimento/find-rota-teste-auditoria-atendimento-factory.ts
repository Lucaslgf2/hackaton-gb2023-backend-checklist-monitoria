import { FindRotaTesteAuditoriaAtendimento } from '@/data/use-cases/rota-teste-auditoria-atendimento/find-rota-teste-auditoria-atendimento'
import { IFindRotaTesteAuditoriaAtendimento } from '@/domain/protocols/rota-teste-auditoria-atendimento/rota-teste-auditoria-atendimento-protocol'

export const makeFindRotaTesteAuditoriaAtendimento = (): IFindRotaTesteAuditoriaAtendimento => {
  return new FindRotaTesteAuditoriaAtendimento()
}
