import { makeSaveMonitoria } from '@/main/factories/use-cases/monitoria/save-monitoria-factory'
import { PostMonitoriaController } from '@/presentation/controllers/monitoria/post-monitoria-controller'
import { IController } from '@/presentation/protocols'
import { makePostMonitoriaItensValidation, makePostMonitoriaValidation } from './validation/post-monitoria-validation-factory'

export const makePostMonitoriaController = (): IController => {
  return new PostMonitoriaController(makePostMonitoriaValidation(), makePostMonitoriaItensValidation(), makeSaveMonitoria())
}
