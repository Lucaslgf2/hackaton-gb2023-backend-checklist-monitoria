export namespace NsMonitoriaRepo {
  export type Input = {
    auditoriaId: number
    canalAtendimento: 'C' | 'V'
    consultorId: number
    monitorId: number
    numeroCaso: number
    dataAtendimento: string
    transcricaoId: number
    tempoLigacao: number
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

  export type Output = { CodigoMonitoria: number } | undefined
}

export interface IMonitoriaRepo {
  insert: (params: NsMonitoriaRepo.Input) => Promise<NsMonitoriaRepo.Output>
}
