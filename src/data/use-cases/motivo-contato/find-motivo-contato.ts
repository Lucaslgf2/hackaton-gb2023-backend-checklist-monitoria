import { IMotivoContatoRepo } from '@/data/protocols/motivo-contato/motivo-contato-repo-protocol'
import { IFindMotivoContato, NsMotivoContato } from '@/domain/protocols/motivo-contato/motivo-contato-protocol'

export class FindMotivoContato implements IFindMotivoContato {
  constructor (
    private readonly motivoContatoRepo: IMotivoContatoRepo
  ) {}

  async find (params: NsMotivoContato.Input): Promise<NsMotivoContato.Output> {
    const dbRows = await this.motivoContatoRepo.select(params)
    return dbRows?.map(item => {
      return {
        motivoContatoId: item.CodigoMotivoContato,
        descricao: item.Descricao
      }
    })
  }
}
