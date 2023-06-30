import { IValidation } from '@/presentation/protocols'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetAmostragemValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new TypeValidation('amostragemId', 'number'))

  return new ValidationComposite(validations)
}
