export namespace NsChecklistMonitoriaRepo {
  export type Input = Array<{
    auditoriaId: number
    canalAtendimento: 'C' | 'V'
    consultorId: number
    monitorId: number
    numeroCaso: number
    dataAtendimento: string
    transcricaoId: number
    tempoLigacao: number
    comentarioGeral: string
    indicadores: Array<{
      subItemId: number
      nota: number
      status: 'AT' | 'NT' | 'NA'
      comentario: string
    }>
  }>

  export type Output = { CodigoChecklistMonitoriaRepo: number } | undefined
}

export interface IChecklistMonitoriaRepo {
  insert: (params: NsChecklistMonitoriaRepo.Input) => Promise<NsChecklistMonitoriaRepo.Output>
}
