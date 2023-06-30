import { IValidation } from '@/presentation/protocols'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetMonitoriaValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new TypeValidation('monitoriaId', 'number'))

  return new ValidationComposite(validations)
}
