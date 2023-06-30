import { IValidation } from '@/presentation/protocols'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetMotivoContatoValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new TypeValidation('motivoContatoId', 'number'))

  return new ValidationComposite(validations)
}
