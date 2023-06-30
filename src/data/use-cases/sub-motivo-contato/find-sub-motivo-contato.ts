import { ISubMotivoContatoRepo } from '@/data/protocols/sub-motivo-contato/sub-motivo-contato-repo-protocol'
import { IFindSubMotivoContato, NsSubMotivoContato } from '@/domain/protocols/sub-motivo-contato/sub-motivo-contato-protocol'

export class FindSubMotivoContato implements IFindSubMotivoContato {
  constructor (
    private readonly subMotivoContatoRepo: ISubMotivoContatoRepo
  ) {}

  async find (params: NsSubMotivoContato.Input): Promise<NsSubMotivoContato.Output> {
    const dbRows = await this.subMotivoContatoRepo.select(params)
    return dbRows?.map(item => {
      return {
        motivoContatoId: item.CodigoMotivoContato,
        subMotivoContatoId: item.CodigoSubMotivoContato,
        descricao: item.Descricao
      }
    })
  }
}
