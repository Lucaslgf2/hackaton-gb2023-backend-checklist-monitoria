import { IMotivoContatoRepo, NsMotivoContatoRepo } from '@/data/protocols/motivo-contato/motivo-contato-repo-protocol'
import { BigQueryPgiRevenue } from '@/infra/adapters/db-big-query/big-query-pgi-revenue'

export class MotivoContatoRepository extends TypeORMConnection implements IMotivoContatoRepo {
  async select (params: NsMotivoContatoRepo.Input): Promise<NsMotivoContatoRepo.Output> {
    const querySql = 'SELECT 1 AS value'

    const sqlParams: any[] = [] // this.getSqlParamsObject(params)

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return []
    }
  }
}
