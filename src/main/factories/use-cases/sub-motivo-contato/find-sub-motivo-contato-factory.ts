import { FindSubMotivoContato } from '@/data/use-cases/sub-motivo-contato/find-sub-motivo-contato'
import { IFindSubMotivoContato } from '@/domain/protocols/sub-motivo-contato/sub-motivo-contato-protocol'
import { makeSubMotivoContatoRepository } from '@/main/factories/repositories/sub-motivo-contato-repository-factory'

export const makeFindSubMotivoContato = (): IFindSubMotivoContato => {
  return new FindSubMotivoContato(makeSubMotivoContatoRepository())
}
