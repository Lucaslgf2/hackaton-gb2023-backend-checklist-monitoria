
export namespace NsMonitoria {
  export type FindInput = { monitoriaId: number }
  export type FindOutput = Array<{
    monitoriaId: number
    dataMonitoria: string
    canalAtendimento: 'Chat' | 'Voz'
    numeroCaso: string
    dataAtendimento: string
    transcricaoId: string
    tempoLigacao: string
    comentarioGeral: string
    checklistMonitoria: Array<{
      id: number
      nota: number
      status: 'AT' | 'NT' | 'NA'
      comentario: string
      indicador: {
        indicadorId: number
        nomeIndicador: string
        item: {
          itemId: number
          nomeItem: string
          subitem: {
            subItemId: number
            nomeSubItem: string
            resumo: string
            peso: number
          }
        }
      }
    }>
    auditoria: {
      auditoriaId: number
      nomeAuditoria: string
    }
    consultor: {
      consultorId: number
      nomeConsultor: string
      email: string
      tempoCasa: string
      vs: string
      celulaAtendimento: string
      supervisor: string
      avayaId: string
    }
    monitor: {
      monitorId: number
      nomeMonitor: string
      vs: string
    }
    amostragem: {
      amostragemId: number
      descricao: string
    }
    motivoContato: {
      motivoContatoId: number
      descricao: string
      subMotivoContato: {
        subMotivoContatoId: number
        descricao: string
        assuntoContato: {
          assuntoContatoId: number
          descricao: string
        }
      }
    }
  }> | undefined

  export type SaveInput = {
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
  export type SaveOutput = { monitoriaId: number } | undefined
}

export interface IFindMonitoria {
  find: (params: NsMonitoria.FindInput) => Promise<NsMonitoria.FindOutput>
}

export interface ISaveMonitoria {
  save: (params: NsMonitoria.SaveInput) => Promise<NsMonitoria.SaveOutput>
}
