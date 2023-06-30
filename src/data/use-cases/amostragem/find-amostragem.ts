import { IAmostragemRepo } from '@/data/protocols/amostragem/amostragem-repo-protocol'
import { IFindAmostragem, NsAmostragem } from '@/domain/protocols/amostragem/amostragem-protocol'

export class FindAmostragem implements IFindAmostragem {
  constructor (
    private readonly amostragemRepo: IAmostragemRepo
  ) {}

  async find (params: NsAmostragem.Input): Promise<NsAmostragem.Output> {
    const dbRows = await this.amostragemRepo.select(params)
    return dbRows?.map(item => {
      return {
        amostragemId: item.CodigoAmostragem,
        descricao: item.Descricao
      }
    })
  }
}
