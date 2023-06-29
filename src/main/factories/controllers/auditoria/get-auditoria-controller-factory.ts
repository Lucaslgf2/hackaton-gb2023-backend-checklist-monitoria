import { makeFindAuditoria } from '@/main/factories/use-cases/auditoria/find-auditoria-factory'
import { GetAuditoriaController } from '@/presentation/controllers/auditoria/get-auditoria-controller'
import { IController } from '@/presentation/protocols'
import { makeGetAuditoriaValidation } from './validation/get-auditoria-validation-factory'

export const makeGetAuditoriaController = (): IController => {
  return new GetAuditoriaController(makeGetAuditoriaValidation(), makeFindAuditoria())
}
