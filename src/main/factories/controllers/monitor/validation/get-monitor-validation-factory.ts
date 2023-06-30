import { IValidation } from '@/presentation/protocols'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetMonitorValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new TypeValidation('monitorId', 'number'))

  return new ValidationComposite(validations)
}
