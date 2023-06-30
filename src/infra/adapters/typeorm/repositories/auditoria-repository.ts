import { IAuditoriaRepo, NsAuditoriaRepo } from '@/data/protocols/auditoria/auditoria-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class AuditoriaRepository extends TypeORMConnection implements IAuditoriaRepo {
  async select (params: NsAuditoriaRepo.Input): Promise<NsAuditoriaRepo.Output> {
    const querySql = `
      SELECT
        Auditoria.CodigoAuditoria, Auditoria.Descricao AS DescAuditoria,
        Indicador.CodigoIndicador, Indicador.Descricao AS DescIndicador,
        ItemIndicador.CodigoItemIndicador, ItemIndicador.Descricao AS DescItemIndicador,
        SubItemIndicador.CodigoSubItemIndicador, SubItemIndicador.Descricao AS DescSubItemIndicador, SubItemIndicador.Resumo,
        PesoCanalSubItemIndicador.SiglaCanal, PesoCanalSubItemIndicador.Peso
      FROM Auditoria
      INNER JOIN ItemAuditoria              ON ItemAuditoria.CodigoAuditoria = Auditoria.CodigoAuditoria
      INNER JOIN ItemIndicador              ON ItemIndicador.CodigoItemIndicador = ItemAuditoria.CodigoItemIndicador
      INNER JOIN SubItemIndicador           ON SubItemIndicador.CodigoItemIndicador = ItemIndicador.CodigoItemIndicador
      INNER JOIN Indicador                  ON Indicador.CodigoIndicador = ItemIndicador.CodigoIndicador
      INNER JOIN PesoCanalSubItemIndicador  ON PesoCanalSubItemIndicador.CodigoSubItemIndicador = SubItemIndicador.CodigoSubItemIndicador
      WHERE 1=1
        AND SiglaCanal = '${params.canalAtendimento}'
        ${params.auditoriaId ? `AND Auditoria.CodigoAuditoria=${params.auditoriaId}` : ''}
      ORDER BY CodigoAuditoria, CodigoIndicador, CodigoItemIndicador, CodigoSubItemIndicador;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoAuditoria: item.CodigoAuditoria,
        DescAuditoria: item.DescAuditoria,
        CodigoIndicador: item.CodigoIndicador,
        DescIndicador: item.DescIndicador,
        CodigoItemIndicador: item.CodigoItemIndicador,
        DescItemIndicador: item.DescItemIndicador,
        CodigoSubItemIndicador: item.CodigoSubItemIndicador,
        DescSubItemIndicador: item.DescSubItemIndicador,
        Resumo: item.Resumo,
        SiglaCanal: item.SiglaCanal,
        Peso: Number(item.Peso)
      }))
    }
  }
}
