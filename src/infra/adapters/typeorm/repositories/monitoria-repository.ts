/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IMonitoriaRepo, NsMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class MonitoriaRepository extends TypeORMConnection implements IMonitoriaRepo {
  async select (params: NsMonitoriaRepo.SelectInput): Promise<NsMonitoriaRepo.SelectOutput> {
    const querySql = `
      SELECT
        Monitoria.CodigoMonitoria,
        Monitoria.CodigoAuditoria,
        Monitoria.CodigoConsultor,
        Monitoria.NumeroCaso,
        Monitoria.DataAtendimento,
        Monitoria.SiglaCanal,
        Monitoria.NumeroTranscricao,
        Monitoria.DuracaoLigacao,
        Monitoria.CodigoAssuntoContato,
        Monitoria.CodigoMonitor,
        Monitoria.CodigoAmostragem,
        Monitoria.DataCriacaoMonitoria,
        Monitoria.ComentarioGeral,
        ChecklistMonitoria.CodigoChecklistMonitoria,
        ChecklistMonitoria.CodigoSubItemIndicador,
        ChecklistMonitoria.Nota,
        ChecklistMonitoria.Status,
        ChecklistMonitoria.Comentario
      FROM Monitoria
      INNER JOIN ChecklistMonitoria ON ChecklistMonitoria.CodigoMonitoria = Monitoria.CodigoMonitoria
      WHERE 1=1
        ${params.monitoriaId ? `AND Monitoria.CodigoMonitoria=${params.monitoriaId}` : ''}
      ORDER BY 1;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoMonitoria: item.CodigoMonitoria,
        CodigoAuditoria: item.CodigoAuditoria,
        CodigoConsultor: item.CodigoConsultor,
        NumeroCaso: item.NumeroCaso,
        DataAtendimento: item.DataAtendimento,
        SiglaCanal: item.SiglaCanal,
        NumeroTranscricao: item.NumeroTranscricao,
        DuracaoLigacao: item.DuracaoLigacao,
        CodigoAssuntoContato: item.CodigoAssuntoContato,
        CodigoMonitor: item.CodigoMonitor,
        CodigoAmostragem: item.CodigoAmostragem,
        DataCriacaoMonitoria: item.DataCriacaoMonitoria,
        ComentarioGeral: item.ComentarioGeral,
        CodigoChecklistMonitoria: item.CodigoChecklistMonitoria,
        CodigoSubItemIndicador: item.CodigoSubItemIndicador,
        Nota: item.Nota,
        Status: item.Status,
        Comentario: item.Comentario
      }))
    }
  }

  async insert (params: NsMonitoriaRepo.InsertInput): Promise<NsMonitoriaRepo.InsertOutput> {
    const insertSqlMonitoria = `
      INSERT INTO Monitoria
        (CodigoAuditoria, CodigoConsultor, NumeroCaso, DataAtendimento, SiglaCanal, NumeroTranscricao, DuracaoLigacao, CodigoAssuntoContato, CodigoMonitor, CodigoAmostragem, DataCriacaoMonitoria, ComentarioGeral)
      VALUES
        (${params.auditoriaId}, ${params.consultorId}, '${params.numeroCaso}', '${params.dataAtendimento}', '${params.canalAtendimento}', '${params.transcricaoId}', ${params.tempoLigacao}, ${params.assuntoContatoId}, ${params.monitorId}, ${params.amostragemId}, '${'2023-06-30'}', '${params.comentarioGeral}');
    `
    const resultInsertMonitoria = await this.executeInsert(insertSqlMonitoria)

    for (const indicador of params.indicadores) {
      const insertSqlChecklistMonitoria = `
        INSERT INTO ChecklistMonitoria
          (CodigoAuditoria, CodigoMonitoria, CodigoSubItemIndicador, Nota, Status, Comentario)
        VALUES
          (${params.auditoriaId}, ${resultInsertMonitoria.insertId}, ${indicador.subItemId}, ${indicador.nota}, '${indicador.status}', '${indicador.comentario}')
      `
      await this.executeInsert(insertSqlChecklistMonitoria)
    }

    return { CodigoMonitoria: resultInsertMonitoria.insertId }
  }
}
