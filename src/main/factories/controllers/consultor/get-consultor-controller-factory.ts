import { makeFindConsultor } from '@/main/factories/use-cases/consultor/find-consultor-factory'
import { GetConsultorController } from '@/presentation/controllers/consultor/get-consultor-controller'
import { IController } from '@/presentation/protocols'
import { makeGetConsultorValidation } from './validation/get-consultor-validation-factory'

export const makeGetConsultorController = (): IController => {
  return new GetConsultorController(makeGetConsultorValidation(), makeFindConsultor())
}
