import { IFindRotaTesteAuditoriaAtendimento, NsRotaTesteAuditoriaAtendimento } from '@/domain/protocols/rota-teste-auditoria-atendimento/rota-teste-auditoria-atendimento-protocol'

export class FindRotaTesteAuditoriaAtendimento implements IFindRotaTesteAuditoriaAtendimento {
  async find (params: NsRotaTesteAuditoriaAtendimento.Input): Promise<NsRotaTesteAuditoriaAtendimento.Output> {
    const dbRows = 'Rota de Teste OK!' // await this.rotaTesteAuditoriaAtendimentoRepo.select(params)
    return dbRows
  }
}
