import { ISubMotivoContatoRepo, NsSubMotivoContatoRepo } from '@/data/protocols/sub-motivo-contato/sub-motivo-contato-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class SubMotivoContatoRepository extends TypeORMConnection implements ISubMotivoContatoRepo {
  async select (params: NsSubMotivoContatoRepo.Input): Promise<NsSubMotivoContatoRepo.Output> {
    const querySql = `
      SELECT
        SubMotivoContato.CodigoMotivoContato,
        SubMotivoContato.CodigoSubMotivoContato,
        SubMotivoContato.Descricao
      FROM SubMotivoContato
      INNER JOIN MotivoContato ON MotivoContato.CodigoMotivoContato = SubMotivoContato.CodigoMotivoContato
      WHERE 1=1
        AND SubMotivoContato.CodigoMotivoContato = ${params.motivoContatoId}
      ORDER BY CodigoMotivoContato, CodigoSubMotivoContato;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoMotivoContato: item.CodigoMotivoContato,
        CodigoSubMotivoContato: item.CodigoSubMotivoContato,
        Descricao: item.Descricao
      }))
    }
  }
}
