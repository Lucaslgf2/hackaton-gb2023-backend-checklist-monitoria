import { IValidation } from '@/presentation/protocols'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetAssuntoContatoValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new RequiredFieldValidation('motivoSubContatoId'))
  validations.push(new TypeValidation('motivoSubContatoId', 'number'))

  return new ValidationComposite(validations)
}
