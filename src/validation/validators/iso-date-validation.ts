import { InvalidParamError } from '@/presentation/errors'
import { IValidation } from '@/presentation/protocols'

export class ISODateValidation implements IValidation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error | undefined {
    if (input[this.fieldName]) {
      return this.checkDate(input) ? new InvalidParamError(this.fieldName, 'ISODate') : undefined
    }
  }

  private checkDate (input: any): boolean {
    // Garante que a string informada está no formato ISO
    const parsedDate = new Date(Date.parse(input[this.fieldName]))
    return (
      isNaN(Date.parse(input[this.fieldName])) || parsedDate.toISOString().substring(0, 10) !== input[this.fieldName]
    )
  }
}
