export namespace NsMonitoriaRepo {
  export type SelectInput = { monitoriaId: number }
  export type SelectOutput = Array<{
    CodigoMonitoria: number
    CodigoAuditoria: number
    CodigoConsultor: number
    NumeroCaso: string
    DataAtendimento: string
    SiglaCanal: 'C' | 'V'
    NumeroTranscricao: string
    DuracaoLigacao: string
    CodigoAssuntoContato: number
    CodigoMonitor: number
    CodigoAmostragem: number
    DataCriacaoMonitoria: string
    ComentarioGeral: string
    CodigoChecklistMonitoria: number
    CodigoSubItemIndicador: number
    Nota: number
    Status: string
    Comentario: string
  }> | undefined

  export type InsertInput = {
    auditoriaId: number
    canalAtendimento: 'C' | 'V'
    consultorId: number
    monitorId: number
    numeroCaso: number
    dataAtendimento: string
    transcricaoId: number
    tempoLigacao: string
    assuntoContatoId: number
    amostragemId: number
    comentarioGeral: string
    indicadores: Array<{
      subItemId: number
      nota: number
      status: 'AT' | 'NT' | 'NA'
      comentario: string
    }>
  }
  export type InsertOutput = { CodigoMonitoria: number } | undefined
}

export interface IMonitoriaRepo {
  select: (params: NsMonitoriaRepo.SelectInput) => Promise<NsMonitoriaRepo.SelectOutput>
  insert: (params: NsMonitoriaRepo.InsertInput) => Promise<NsMonitoriaRepo.InsertOutput>
}
