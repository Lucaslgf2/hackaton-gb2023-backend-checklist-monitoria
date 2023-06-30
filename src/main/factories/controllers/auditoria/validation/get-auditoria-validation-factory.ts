import { IValidation } from '@/presentation/protocols'
import { GenericValuesValidation } from '@/validation/validators/generic-values-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeGetAuditoriaValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new RequiredFieldValidation('canalAtendimento'))
  validations.push(new GenericValuesValidation('canalAtendimento', ['C', 'V']))

  validations.push(new TypeValidation('auditoriaId', 'number'))

  return new ValidationComposite(validations)
}
