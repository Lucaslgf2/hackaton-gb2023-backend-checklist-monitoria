import { IConsultorRepo, NsConsultorRepo } from '@/data/protocols/consultor/consultor-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class ConsultorRepository extends TypeORMConnection implements IConsultorRepo {
  async select (params: NsConsultorRepo.Input): Promise<NsConsultorRepo.Output> {
    const querySql = `
      SELECT
        CodigoConsultor, Nome, Email, Vs, TempoCasa, CelularAtendimento, Supervisor
      FROM Consultor
      WHERE 1=1
        ${params.consultorId ? `AND CodigoConsultor=${params.consultorId}` : ''}
      ORDER BY CodigoConsultor;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoConsultor: item.CodigoConsultor,
        Nome: item.Nome,
        Email: item.Email,
        Vs: item.Vs,
        TempoCasa: item.TempoCasa,
        CelulaAtendimento: item.CelulaAtendimento,
        Supervisor: item.Supervisor
      }))
    }
  }
}
