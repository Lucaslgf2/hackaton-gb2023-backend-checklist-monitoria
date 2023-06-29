import { FindDefaultFunction } from '@/data/use-cases/default-function/find-default-function'
import { IFindDefaultFunction } from '@/domain/protocols/default-function/default-function-protocol'

export const makeFindDefaultFunction = (): IFindDefaultFunction => {
  return new FindDefaultFunction()
}
