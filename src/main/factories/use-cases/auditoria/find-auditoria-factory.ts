import { FindAuditoria } from '@/data/use-cases/auditoria/find-auditoria'
import { IFindAuditoria } from '@/domain/protocols/auditoria/auditoria-protocol'
import { makeAuditoriaRepository } from '@/main/factories/repositories/auditoria-repository-factory'

export const makeFindAuditoria = (): IFindAuditoria => {
  return new FindAuditoria(makeAuditoriaRepository())
}
