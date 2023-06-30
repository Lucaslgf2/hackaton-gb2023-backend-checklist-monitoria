import { IAssuntoContatoRepo, NsAssuntoContatoRepo } from '@/data/protocols/assunto-contato/assunto-contato-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class AssuntoContatoRepository extends TypeORMConnection implements IAssuntoContatoRepo {
  async select (params: NsAssuntoContatoRepo.Input): Promise<NsAssuntoContatoRepo.Output> {
    const querySql = `
      SELECT
        AssuntoContato.CodigoSubMotivoContato,
        AssuntoContato.CodigoAssuntoContato,
        AssuntoContato.Descricao
      FROM AssuntoContato
      INNER JOIN SubMotivoContato ON SubMotivoContato.CodigoSubMotivoContato = AssuntoContato.CodigoSubMotivoContato
      WHERE 1=1
        AND AssuntoContato.CodigoSubMotivoContato = ${params.motivoSubContatoId}
      ORDER BY CodigoSubMotivoContato, CodigoAssuntoContato;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoSubMotivoContato: item.CodigoMotivoContato,
        CodigoAssuntoContato: item.CodigoSubMotivoContato,
        Descricao: item.Descricao
      }))
    }
  }
}
