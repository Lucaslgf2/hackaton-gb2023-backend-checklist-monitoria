import { makeFindSubMotivoContato } from '@/main/factories/use-cases/sub-motivo-contato/find-sub-motivo-contato-factory'
import { GetSubMotivoContatoController } from '@/presentation/controllers/sub-motivo-contato/get-sub-motivo-contato-controller'
import { IController } from '@/presentation/protocols'
import { makeGetSubMotivoContatoValidation } from './validation/get-sub-motivo-contato-validation-factory'

export const makeGetSubMotivoContatoController = (): IController => {
  return new GetSubMotivoContatoController(makeGetSubMotivoContatoValidation(), makeFindSubMotivoContato())
}
