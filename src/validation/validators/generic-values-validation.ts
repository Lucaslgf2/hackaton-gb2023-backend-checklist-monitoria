import { InvalidParamError } from '@/presentation/errors'
import { IValidation } from '@/presentation/protocols'

export class GenericValuesValidation implements IValidation {
  constructor (private readonly fieldName: string, private readonly values: string[]) {}

  validate (input: any): Error | undefined {
    if (input[this.fieldName] && !this.values.includes(input[this.fieldName])) {
      return new InvalidParamError(this.fieldName, this.values.join())
    }
  }
}
