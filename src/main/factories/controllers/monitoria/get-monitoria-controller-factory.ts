import { makeFindMonitoria } from '@/main/factories/use-cases/monitoria/find-monitoria-factory'
import { GetMonitoriaController } from '@/presentation/controllers/monitoria/get-monitoria-controller'
import { IController } from '@/presentation/protocols'
import { makeGetMonitoriaValidation } from './validation/get-monitoria-validation-factory'

export const makeGetMonitoriaController = (): IController => {
  return new GetMonitoriaController(makeGetMonitoriaValidation(), makeFindMonitoria())
}
