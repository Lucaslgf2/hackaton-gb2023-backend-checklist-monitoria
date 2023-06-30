import { FindMonitor } from '@/data/use-cases/monitor/find-monitor'
import { IFindMonitor } from '@/domain/protocols/monitor/monitor-protocol'
import { makeMonitorRepository } from '@/main/factories/repositories/monitor-repository-factory'

export const makeFindMonitor = (): IFindMonitor => {
  return new FindMonitor(makeMonitorRepository())
}
