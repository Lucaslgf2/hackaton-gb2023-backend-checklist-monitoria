/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { IMonitoriaRepo, NsMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class MonitoriaRepository extends TypeORMConnection implements IMonitoriaRepo {
  async select (params: NsMonitoriaRepo.SelectInput): Promise<NsMonitoriaRepo.SelectOutput> {
    const querySql = `
      SELECT
        Monitoria.CodigoMonitoria,
        Monitoria.NumeroCaso,
        Monitoria.DataAtendimento,
        Monitoria.NumeroTranscricao,
        Monitoria.DuracaoLigacao,
        Monitoria.DataCriacaoMonitoria,
        Monitoria.ComentarioGeral,
        ChecklistMonitoria.CodigoChecklistMonitoria,
        ChecklistMonitoria.Nota,
        ChecklistMonitoria.Status,
        ChecklistMonitoria.Comentario,
        Auditoria.CodigoAuditoria,
        Auditoria.Descricao AS DescAuditoria,
        Consultor.CodigoConsultor,
        Consultor.Nome AS NomeConsultor,
        Consultor.Email AS EmailConsultor,
        Consultor.Vs AS VsConsultor,
        Consultor.TempoCasa,
        Consultor.CelulaAtendimento,
        Consultor.Supervisor,
        Consultor.NumeroAvaya,
        Monitor.CodigoMonitor,
        Monitor.NomeMonitor,
        Monitor.Vs AS VsMonitor,
        Amostragem.CodigoAmostragem,
        Amostragem.Descricao AS DescAmostragem,
        AssuntoContato.CodigoAssuntoContato ,
        AssuntoContato.Descricao AS DescAssuntoContato,
        SubMotivoContato.CodigoSubMotivoContato ,
        SubMotivoContato.Descricao AS DescSubMotivoContato,
        MotivoContato.CodigoMotivoContato ,
        MotivoContato.Descricao AS DescMotivoContato,
        Indicador.CodigoIndicador,
        Indicador.Descricao AS DescIndicador,
        ItemIndicador.CodigoItemIndicador,
        ItemIndicador.Descricao AS DescItemIndicador,
        SubItemIndicador.CodigoSubItemIndicador,
        SubItemIndicador.Descricao AS DescSubItemIndicador,
        SubItemIndicador.Resumo,
        PesoCanalSubItemIndicador.SiglaCanal,
        PesoCanalSubItemIndicador.Peso
      FROM Monitoria
      INNER JOIN ChecklistMonitoria         ON ChecklistMonitoria.CodigoMonitoria = Monitoria.CodigoMonitoria
      INNER JOIN Auditoria                  ON Auditoria.CodigoAuditoria = Monitoria.CodigoAuditoria
      INNER JOIN Consultor                  ON Consultor.CodigoConsultor = Monitoria.CodigoConsultor
      INNER JOIN Monitor                    ON Monitor.CodigoMonitor = Monitoria.CodigoMonitor
      INNER JOIN Amostragem                 ON Amostragem.CodigoAmostragem = Monitoria.CodigoAmostragem
      INNER JOIN AssuntoContato             ON AssuntoContato.CodigoAssuntoContato = Monitoria.CodigoAssuntoContato
      INNER JOIN SubMotivoContato           ON SubMotivoContato.CodigoSubMotivoContato = AssuntoContato.CodigoSubMotivoContato
      INNER JOIN MotivoContato              ON MotivoContato.CodigoMotivoContato = SubMotivoContato.CodigoMotivoContato
      INNER JOIN SubItemIndicador           ON SubItemIndicador.CodigoSubItemIndicador = ChecklistMonitoria.CodigoSubItemIndicador
      INNER JOIN ItemIndicador              ON ItemIndicador.CodigoItemIndicador = SubItemIndicador.CodigoItemIndicador
      INNER JOIN Indicador                  ON Indicador.CodigoIndicador = ItemIndicador.CodigoIndicador
      INNER JOIN PesoCanalSubItemIndicador  ON PesoCanalSubItemIndicador.CodigoSubItemIndicador = SubItemIndicador.CodigoSubItemIndicador
      WHERE 1=1
        ${params.monitoriaId ? `AND Monitoria.CodigoMonitoria=${params.monitoriaId}` : ''}
      ORDER BY Monitoria.CodigoMonitoria, ChecklistMonitoria.CodigoChecklistMonitoria;
    `

    const sqlParams: any[] = []

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return resultDb.map(item => ({
        CodigoMonitoria: item.CodigoMonitoria,
        NumeroCaso: item.NumeroCaso,
        DataAtendimento: item.DataAtendimento,
        NumeroTranscricao: item.NumeroTranscricao,
        DuracaoLigacao: item.DuracaoLigacao,
        DataCriacaoMonitoria: item.DataCriacaoMonitoria,
        ComentarioGeral: item.ComentarioGeral,
        CodigoChecklistMonitoria: item.CodigoChecklistMonitoria,
        Nota: item.Nota,
        Status: item.Status,
        Comentario: item.Comentario,
        CodigoAuditoria: item.CodigoAuditoria,
        DescAuditoria: item.DescAuditoria,
        CodigoConsultor: item.CodigoConsultor,
        NomeConsultor: item.NomeConsultor,
        EmailConsultor: item.EmailConsultor,
        VsConsultor: item.VsConsultor,
        TempoCasa: item.TempoCasa,
        CelulaAtendimento: item.CelulaAtendimento,
        Supervisor: item.Supervisor,
        NumeroAvaya: item.NumeroAvaya,
        CodigoMonitor: item.CodigoMonitor,
        NomeMonitor: item.NomeMonitor,
        VsMonitor: item.VsMonitor,
        CodigoAmostragem: item.CodigoAmostragem,
        DescAmostragem: item.DescAmostragem,
        CodigoAssuntoContato: item.CodigoAssuntoContato,
        DescAssuntoContato: item.DescAssuntoContato,
        CodigoSubMotivoContato: item.CodigoSubMotivoContato,
        DescSubMotivoContato: item.DescSubMotivoContato,
        CodigoMotivoContato: item.CodigoMotivoContato,
        DescMotivoContato: item.DescMotivoContato,
        CodigoIndicador: item.CodigoIndicador,
        DescIndicador: item.DescIndicador,
        CodigoItemIndicador: item.CodigoItemIndicador,
        DescItemIndicador: item.DescItemIndicador,
        CodigoSubItemIndicador: item.CodigoSubItemIndicador,
        DescSubItemIndicador: item.DescSubItemIndicador,
        Resumo: item.Resumo,
        SiglaCanal: item.SiglaCanal,
        Peso: item.Peso
      }))
    }
  }

  async insert (params: NsMonitoriaRepo.InsertInput): Promise<NsMonitoriaRepo.InsertOutput> {
    const insertSqlMonitoria = `
      INSERT INTO Monitoria
        (CodigoAuditoria, CodigoConsultor, NumeroCaso, DataAtendimento, SiglaCanal, NumeroTranscricao, DuracaoLigacao, CodigoAssuntoContato, CodigoMonitor, CodigoAmostragem, DataCriacaoMonitoria, ComentarioGeral)
      VALUES
        (${params.auditoriaId}, ${params.consultorId}, '${params.numeroCaso}', '${params.dataAtendimento}', '${params.canalAtendimento}', '${params.transcricaoId}', '${params.tempoLigacao}', ${params.assuntoContatoId}, ${params.monitorId}, ${params.amostragemId}, '${'2023-06-30'}', '${params.comentarioGeral}');
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
