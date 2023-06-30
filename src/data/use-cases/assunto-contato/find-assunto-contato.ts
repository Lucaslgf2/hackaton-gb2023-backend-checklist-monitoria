import { IAssuntoContatoRepo } from '@/data/protocols/assunto-contato/assunto-contato-repo-protocol'
import { IFindAssuntoContato, NsAssuntoContato } from '@/domain/protocols/assunto-contato/assunto-contato-protocol'

export class FindAssuntoContato implements IFindAssuntoContato {
  constructor (
    private readonly assuntoContatoRepo: IAssuntoContatoRepo
  ) {}

  async find (params: NsAssuntoContato.Input): Promise<NsAssuntoContato.Output> {
    const dbRows = await this.assuntoContatoRepo.select(params)
    return dbRows?.map(item => {
      return {
        motivoSubContatoId: item.CodigoSubMotivoContato,
        assuntoContatoId: item.CodigoAssuntoContato,
        descricao: item.Descricao
      }
    })
  }
}
