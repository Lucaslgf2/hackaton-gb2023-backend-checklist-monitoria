import { IValidation } from '@/presentation/protocols'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetSubMotivoContatoValidation = (): IValidation => {
  const validations: IValidation[] = []

  // validations.push(new RequiredFieldValidation('startCurrentDate'))
  // validations.push(new RequiredFieldValidation('endCurrentDate'))
  // validations.push(new RequiredFieldValidation('startPreviousDate'))
  // validations.push(new RequiredFieldValidation('endPreviousDate'))

  // validations.push(new ISODateValidation('startCurrentDate'))
  // validations.push(new ISODateValidation('endCurrentDate'))
  // validations.push(new ISODateValidation('startPreviousDate'))
  // validations.push(new ISODateValidation('endPreviousDate'))

  return new ValidationComposite(validations)
}
