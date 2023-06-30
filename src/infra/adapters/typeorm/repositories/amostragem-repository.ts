import { IAmostragemRepo, NsAmostragemRepo } from '@/data/protocols/amostragem/amostragem-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class AmostragemRepository extends TypeORMConnection implements IAmostragemRepo {
  async select (params: NsAmostragemRepo.Input): Promise<NsAmostragemRepo.Output> {
    const querySql = `
      SELECT
        CodigoAmostragem, Descricao
      FROM Amostragem
      WHERE 1=1
        ${params.amostragemId ? `AND CodigoAmostragem=${params.amostragemId}` : ''}
      ORDER BY CodigoAmostragem;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoAmostragem: item.CodigoAmostragem,
        Descricao: item.Descricao
      }))
    }
  }
}
