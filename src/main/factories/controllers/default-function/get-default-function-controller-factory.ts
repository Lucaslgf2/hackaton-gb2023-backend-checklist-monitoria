import { makeFindDefaultFunction } from '@/main/factories/use-cases/default-function/find-default-function-factory'
import { GetDefaultFunctionController } from '@/presentation/controllers/default-function/get-default-function-controller'
import { IController } from '@/presentation/protocols'
import { makeGetDefaultFunctionValidation } from './validation/get-default-function-validation-factory'

export const makeGetDefaultFunctionController = (): IController => {
  return new GetDefaultFunctionController(makeGetDefaultFunctionValidation(), makeFindDefaultFunction())
}
