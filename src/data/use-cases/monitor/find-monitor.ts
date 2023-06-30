import { IMonitorRepo } from '@/data/protocols/monitor/monitor-repo-protocol'
import { IFindMonitor, NsMonitor } from '@/domain/protocols/monitor/monitor-protocol'

export class FindMonitor implements IFindMonitor {
  constructor (
    private readonly monitorRepo: IMonitorRepo
  ) {}

  async find (params: NsMonitor.Input): Promise<NsMonitor.Output> {
    const dbRows = await this.monitorRepo.select(params)
    return dbRows?.map(item => {
      return {
        monitorId: item.CodigoMonitor,
        nomeMonitor: item.Nome,
        vs: item.Vs
      }
    })
  }
}
