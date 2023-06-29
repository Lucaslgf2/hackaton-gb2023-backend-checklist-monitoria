import { makeFindMonitor } from '@/main/factories/use-cases/monitor/find-monitor-factory'
import { GetMonitorController } from '@/presentation/controllers/monitor/get-monitor-controller'
import { IController } from '@/presentation/protocols'
import { makeGetMonitorValidation } from './validation/get-monitor-validation-factory'

export const makeGetMonitorController = (): IController => {
  return new GetMonitorController(makeGetMonitorValidation(), makeFindMonitor())
}
