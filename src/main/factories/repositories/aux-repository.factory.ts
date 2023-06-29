import { IRotaTesteAuditoriaAtendimentoRepo } from '@/data/protocols/rota-teste-auditoria-atendimento/rota-teste-auditoria-atendimento-repo-protocol'
import { AuxRepository } from '@/infra/adapters/typeorm/repositories/aux-repository'

export const makeAuxRepository = (): IRotaTesteAuditoriaAtendimentoRepo => {
  return new AuxRepository()
}
