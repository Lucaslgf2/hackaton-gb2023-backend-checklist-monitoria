import { IFindDefaultFunction, NsDefaultFunction } from '@/domain/protocols/default-function/default-function-protocol'

export class FindDefaultFunction implements IFindDefaultFunction {
  async find (): Promise<NsDefaultFunction.Output> {
    const result = { message: 'Welcome to PDD!' }
    return result
  }
}
