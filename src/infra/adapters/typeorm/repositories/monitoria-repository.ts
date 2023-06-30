/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IMonitoriaRepo, NsMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class MonitoriaRepository extends TypeORMConnection implements IMonitoriaRepo {
  async insert (params: NsMonitoriaRepo.Input): Promise<NsMonitoriaRepo.Output> {
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
