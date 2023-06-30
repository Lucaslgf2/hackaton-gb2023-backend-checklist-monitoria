import { IMotivoContatoRepo, NsMotivoContatoRepo } from '@/data/protocols/motivo-contato/motivo-contato-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class MotivoContatoRepository extends TypeORMConnection implements IMotivoContatoRepo {
  async select (params: NsMotivoContatoRepo.Input): Promise<NsMotivoContatoRepo.Output> {
    const querySql = `
      SELECT
        CodigoMotivoContato, Descricao
      FROM MotivoContato
      WHERE 1=1
        ${params.motivoContatoId ? `AND CodigoMotivoContato=${params.motivoContatoId}` : ''}
      ORDER BY CodigoMotivoContato;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoMotivoContato: item.CodigoMotivoContato,
        Descricao: item.Descricao
      }))
    }
  }
}
