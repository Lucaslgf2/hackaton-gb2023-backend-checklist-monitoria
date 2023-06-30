export namespace NsMonitoriaRepo {
  export type SelectInput = { monitoriaId: number }
  export type SelectOutput = Array<{
    CodigoMonitoria: number
    NumeroCaso: string
    DataAtendimento: string
    NumeroTranscricao: string
    DuracaoLigacao: string
    DataCriacaoMonitoria: string
    ComentarioGeral: string
    CodigoChecklistMonitoria: number
    Nota: number
    Status: string
    Comentario: string
    CodigoAuditoria: number
    DescAuditoria: string
    CodigoConsultor: number
    NomeConsultor: string
    EmailConsultor: string
    VsConsultor: string
    TempoCasa: string
    CelulaAtendimento: string
    Supervisor: string
    NumeroAvaya: string
    CodigoMonitor: number
    NomeMonitor: string
    VsMonitor: string
    CodigoAmostragem: number
    DescAmostragem: string
    CodigoAssuntoContato: number
    DescAssuntoContato: string
    CodigoSubMotivoContato: number
    DescSubMotivoContato: string
    CodigoMotivoContato: number
    DescMotivoContato: string
    CodigoIndicador: number
    DescIndicador: string
    CodigoItemIndicador: number
    DescItemIndicador: string
    CodigoSubItemIndicador: number
    DescSubItemIndicador: string
    Resumo: string
    SiglaCanal: 'C' | 'V'
    Peso: number
  }> | undefined

  export type InsertInput = {
    auditoriaId: number
    canalAtendimento: 'C' | 'V'
    consultorId: number
    monitorId: number
    numeroCaso: string
    dataAtendimento: string
    transcricaoId: string
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
