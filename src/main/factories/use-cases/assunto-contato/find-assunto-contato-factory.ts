import { FindAssuntoContato } from '@/data/use-cases/assunto-contato/find-assunto-contato'
import { IFindAssuntoContato } from '@/domain/protocols/assunto-contato/assunto-contato-protocol'
import { makeAssuntoContatoRepository } from '@/main/factories/repositories/assunto-contato-repository-factory'

export const makeFindAssuntoContato = (): IFindAssuntoContato => {
  return new FindAssuntoContato(makeAssuntoContatoRepository())
}
