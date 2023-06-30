import { FindMotivoContato } from '@/data/use-cases/motivo-contato/find-motivo-contato'
import { IFindMotivoContato } from '@/domain/protocols/motivo-contato/motivo-contato-protocol'
import { makeMotivoContatoRepository } from '@/main/factories/repositories/motivo-contato-repository-factory'

export const makeFindMotivoContato = (): IFindMotivoContato => {
  return new FindMotivoContato(makeMotivoContatoRepository())
}
