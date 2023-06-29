import { IRotaTesteAuditoriaAtendimentoRepo, NsRotaTesteAuditoriaAtendimentoRepo } from '@/data/protocols/rota-teste-auditoria-atendimento/rota-teste-auditoria-atendimento-repo-protocol'
import { TypeORMConnection } from '../typeorm-connection'

export class AuxRepository extends TypeORMConnection implements IRotaTesteAuditoriaAtendimentoRepo {
  async select (params: NsRotaTesteAuditoriaAtendimentoRepo.Input): Promise<NsRotaTesteAuditoriaAtendimentoRepo.Output> {
    const result = await this.executeQuery('SELECT * FROM Indicador')
    console.log('RESULTADO DA QUERY => ', result)
    return result
  }
}
