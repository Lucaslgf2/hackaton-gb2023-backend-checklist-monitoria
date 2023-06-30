import { MonitorRepository } from '@/infra/adapters/typeorm/repositories/monitor-repository'

export const makeMonitorRepository = (): MonitorRepository => {
  return new MonitorRepository()
}
