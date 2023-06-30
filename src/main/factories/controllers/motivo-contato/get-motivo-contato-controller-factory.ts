import { makeFindMotivoContato } from '@/main/factories/use-cases/motivo-contato/find-motivo-contato-factory'
import { GetMotivoContatoController } from '@/presentation/controllers/motivo-contato/get-motivo-contato-controller'
import { IController } from '@/presentation/protocols'
import { makeGetMotivoContatoValidation } from './validation/get-motivo-contato-validation-factory'

export const makeGetMotivoContatoController = (): IController => {
  return new GetMotivoContatoController(makeGetMotivoContatoValidation(), makeFindMotivoContato())
}
