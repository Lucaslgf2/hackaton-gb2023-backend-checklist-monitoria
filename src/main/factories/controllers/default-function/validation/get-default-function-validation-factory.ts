import { IValidation } from '@/presentation/protocols'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetDefaultFunctionValidation = (): IValidation => {
  const validations: IValidation[] = []

  // TO-DO

  return new ValidationComposite(validations)
}
