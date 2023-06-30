import { makeFindAmostragem } from '@/main/factories/use-cases/amostragem/find-amostragem-factory'
import { GetAmostragemController } from '@/presentation/controllers/amostragem/get-amostragem-controller'
import { IController } from '@/presentation/protocols'
import { makeGetAmostragemValidation } from './validation/get-amostragem-validation-factory'

export const makeGetAmostragemController = (): IController => {
  return new GetAmostragemController(makeGetAmostragemValidation(), makeFindAmostragem())
}
