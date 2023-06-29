import { IValidation } from '@/presentation/protocols'
import { ISODateValidation } from '@/validation/validators/iso-date-validation'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { TypeValidation } from '@/validation/validators/type-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makePostMonitoriaValidation = (): IValidation => {
  const validations: IValidation[] = []

  validations.push(new RequiredFieldValidation('auditoriaId'))
  validations.push(new RequiredFieldValidation('consultorId'))
  validations.push(new RequiredFieldValidation('monitorId'))
  validations.push(new RequiredFieldValidation('numeroCaso'))
  validations.push(new RequiredFieldValidation('dataAtendimento'))
  validations.push(new RequiredFieldValidation('transcricaoId'))
  validations.push(new RequiredFieldValidation('idAvaya'))
  validations.push(new RequiredFieldValidation('comentarioGeral'))
  validations.push(new RequiredFieldValidation('indicadores'))
  // validations.push(new RequiredFieldValidation('indicadorId'))
  // validations.push(new RequiredFieldValidation('itemId'))
  // validations.push(new RequiredFieldValidation('subItemId'))
  // validations.push(new RequiredFieldValidation('nota'))
  // validations.push(new RequiredFieldValidation('status'))
  // validations.push(new RequiredFieldValidation('comentario'))

  validations.push(new TypeValidation('auditoriaId', 'number'))
  validations.push(new TypeValidation('consultorId', 'number'))
  validations.push(new TypeValidation('monitorId', 'number'))
  validations.push(new TypeValidation('numeroCaso', 'number'))
  validations.push(new ISODateValidation('dataAtendimento'))
  validations.push(new TypeValidation('transcricaoId', 'number'))
  validations.push(new TypeValidation('idAvaya', 'number'))
  validations.push(new TypeValidation('comentarioGeral', 'string'))
  validations.push(new TypeValidation('indicadores', 'object', true))
  // validations.push(new TypeValidation('indicadorId', 'number'))
  // validations.push(new TypeValidation('itemId', 'number'))
  // validations.push(new TypeValidation('subItemId', 'number'))
  // validations.push(new TypeValidation('nota', 'number'))
  // validations.push(new GenericValuesValidation('status', ['OK', 'NOK', 'NA']))
  // validations.push(new TypeValidation('comentario', 'string'))

  return new ValidationComposite(validations)
}
