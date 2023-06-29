import { IAuditoriaRepo } from '@/data/protocols/auditoria/auditoria-repo-protocol'
import { IFindAuditoria, NsAuditoria } from '@/domain/protocols/auditoria/auditoria-protocol'

export class FindAuditoria implements IFindAuditoria {
  constructor (
    private readonly auditoriaRepo: IAuditoriaRepo
  ) {}

  async find (params: NsAuditoria.Input): Promise<NsAuditoria.Output> {
    const dbRows = await this.auditoriaRepo.select(params)
    return dbRows
  }
}
