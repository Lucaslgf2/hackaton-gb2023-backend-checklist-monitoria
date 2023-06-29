import { IAmostragemRepo } from '@/data/protocols/amostragem/amostragem-repo-protocol'
import { IFindAmostragem, NsAmostragem } from '@/domain/protocols/amostragem/amostragem-protocol'

export class FindAmostragem implements IFindAmostragem {
  constructor (
    private readonly amostragemRepo: IAmostragemRepo
  ) {}

  async find (params: NsAmostragem.Input): Promise<NsAmostragem.Output> {
    const dbRows = {}// await this.amostragemRepo.select(params)
    console.log(dbRows)
    return [
      {
        amostragemId: 1,
        descricao: 'ALEATÓRIA'
      },
      {
        amostragemId: 2,
        descricao: 'DOMÍNIO TÉCNICO'
      },
      {
        amostragemId: 3,
        descricao: 'FCR'
      },
      {
        amostragemId: 4,
        descricao: 'REGISTRO DE CASO'
      }
    ]
  }
}
