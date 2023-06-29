import { IMonitorRepo } from '@/data/protocols/monitor/monitor-repo-protocol'
import { IFindMonitor, NsMonitor } from '@/domain/protocols/monitor/monitor-protocol'

export class FindMonitor implements IFindMonitor {
  constructor (
    private readonly monitorRepo: IMonitorRepo
  ) {}

  async find (params: NsMonitor.Input): Promise<NsMonitor.Output> {
    const dbRows = {}// await this.monitorRepo.select(params)
    console.log(dbRows)
    return [
      {
        monitorId: 1,
        nomeMonitor: 'Monitor 1'
      },
      {
        monitorId: 2,
        nomeMonitor: 'Monitor 2'
      }
    ]
  }
}
