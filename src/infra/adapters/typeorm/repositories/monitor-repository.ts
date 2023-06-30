import { IMonitorRepo, NsMonitorRepo } from '@/data/protocols/monitor/monitor-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class MonitorRepository extends TypeORMConnection implements IMonitorRepo {
  async select (params: NsMonitorRepo.Input): Promise<NsMonitorRepo.Output> {
    const querySql = `
      SELECT
        CodigoMonitor, Nome, Vs
      FROM Monitor
      WHERE 1=1
        ${params.monitorId ? `AND CodigoMonitor=${params.monitorId}` : ''}
      ORDER BY CodigoMonitor;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoMonitor: item.CodigoMonitor,
        Nome: item.Nome,
        Vs: item.Vs
      }))
    }
  }
}
