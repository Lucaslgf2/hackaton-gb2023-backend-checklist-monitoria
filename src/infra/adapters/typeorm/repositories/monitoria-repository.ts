import { IMonitoriaRepo, NsMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { TypeORMConnection } from '../typeorm-connection'

export class MonitoriaRepository extends TypeORMConnection implements IMonitoriaRepo {
  async select (params: NsMonitoriaRepo.Input): Promise<NsMonitoriaRepo.Output> {
    const querySql = 'SELECT 1 AS value'

    const sqlParams: any[] = [] // this.getSqlParamsObject(params)

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return []
    }
  }
}
