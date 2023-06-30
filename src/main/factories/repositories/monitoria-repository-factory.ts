import { MonitoriaRepository } from '@/infra/adapters/typeorm/repositories/monitoria-repository'

export const makeMonitoriaRepository = (): MonitoriaRepository => {
  return new MonitoriaRepository()
}
