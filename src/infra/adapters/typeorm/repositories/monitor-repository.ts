import { IMonitorRepo, NsMonitorRepo } from '@/data/protocols/monitor/monitor-repo-protocol'
import { TypeORMConnection } from '../typeorm-connection'

export class MonitorRepository extends TypeORMConnection implements IMonitorRepo {
  async select (params: NsMonitorRepo.Input): Promise<NsMonitorRepo.Output> {
    const querySql = 'SELECT * FROM Monitor'

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return []
      // return resultDb.map(item => ())
    }
  }
}
