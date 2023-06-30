import { IAssuntoContatoRepo, NsAssuntoContatoRepo } from '@/data/protocols/assunto-contato/assunto-contato-repo-protocol'
import { BigQueryPgiRevenue } from '@/infra/adapters/db-big-query/big-query-pgi-revenue'

export class AssuntoContatoRepository extends TypeORMConnection implements IAssuntoContatoRepo {
  async select (params: NsAssuntoContatoRepo.Input): Promise<NsAssuntoContatoRepo.Output> {
    const querySql = 'SELECT 1 AS value'

    const sqlParams: any[] = [] // this.getSqlParamsObject(params)

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return []
    }
  }
}
