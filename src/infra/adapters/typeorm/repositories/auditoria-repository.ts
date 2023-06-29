import { IAuditoriaRepo, NsAuditoriaRepo } from '@/data/protocols/auditoria/auditoria-repo-protocol'
import { TypeORMConnection } from '../typeorm-connection'

export class AuditoriaRepository extends TypeORMConnection implements IAuditoriaRepo {
  async select (params: NsAuditoriaRepo.Input): Promise<NsAuditoriaRepo.Output> {
    const querySql = `
      SELECT
        *
      FROM Auditoria
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoAuditoria: item.CodigoAuditoria,
        Descricao: item.Descrição
      }))
    }
  }
}
