import { ISubMotivoContatoRepo, NsSubMotivoContatoRepo } from '@/data/protocols/sub-motivo-contato/sub-motivo-contato-repo-protocol'
import { BigQueryPgiRevenue } from '@/infra/adapters/db-big-query/big-query-pgi-revenue'

export class SubMotivoContatoRepository extends TypeORMConnection implements ISubMotivoContatoRepo {
  async select (params: NsSubMotivoContatoRepo.Input): Promise<NsSubMotivoContatoRepo.Output> {
    const querySql = 'SELECT 1 AS value'

    const sqlParams: any[] = [] // this.getSqlParamsObject(params)

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return []
    }
  }
}
