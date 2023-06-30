export namespace NsMonitoria {
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

  export type Output = { monitoriaId: number } | undefined
}

export interface ISaveMonitoria {
  save: (params: NsMonitoria.Input) => Promise<NsMonitoria.Output>
}
