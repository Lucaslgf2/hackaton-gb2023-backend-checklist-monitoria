import { makeFindMonitoria } from '@/main/factories/use-cases/monitoria/find-monitoria-factory'
import { PostMonitoriaController } from '@/presentation/controllers/monitoria/post-monitoria-controller'
import { IController } from '@/presentation/protocols'
import { makePostMonitoriaValidation } from './validation/post-monitoria-validation-factory'

export const makePostMonitoriaController = (): IController => {
  return new PostMonitoriaController(makePostMonitoriaValidation(), makeFindMonitoria())
}
