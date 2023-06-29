import { IRotaTesteAuditoriaAtendimentoRepo } from '@/data/protocols/rota-teste-auditoria-atendimento/rota-teste-auditoria-atendimento-repo-protocol'
import { IFindRotaTesteAuditoriaAtendimento, NsRotaTesteAuditoriaAtendimento } from '@/domain/protocols/rota-teste-auditoria-atendimento/rota-teste-auditoria-atendimento-protocol'

export class FindRotaTesteAuditoriaAtendimento implements IFindRotaTesteAuditoriaAtendimento {
  constructor (
    private readonly IAuxRepo: IRotaTesteAuditoriaAtendimentoRepo
  ) {}

  async find (params: NsRotaTesteAuditoriaAtendimento.Input): Promise<NsRotaTesteAuditoriaAtendimento.Output> {
    const dbRows = await this.IAuxRepo.select(null)
    const teste = 'Rota de Teste OK!'
    return { teste, dbRows }
  }
}
