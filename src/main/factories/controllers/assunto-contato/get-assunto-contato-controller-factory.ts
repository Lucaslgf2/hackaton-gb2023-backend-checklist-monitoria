import { makeFindAssuntoContato } from '@/main/factories/use-cases/assunto-contato/find-assunto-contato-factory'
import { GetAssuntoContatoController } from '@/presentation/controllers/assunto-contato/get-assunto-contato-controller'
import { IController } from '@/presentation/protocols'
import { makeGetAssuntoContatoValidation } from './validation/get-assunto-contato-validation-factory'

export const makeGetAssuntoContatoController = (): IController => {
  return new GetAssuntoContatoController(makeGetAssuntoContatoValidation(), makeFindAssuntoContato())
}
