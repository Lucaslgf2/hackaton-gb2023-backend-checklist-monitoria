import { NsAuditoria } from '@/domain/protocols/auditoria/auditoria-protocol'

export namespace NsMonitoria {
  export type FindInput = { monitoriaId: number }
  export type FindOutput = Array<{
    monitoriaId: number
    dataMonitoria: string
    canalAtendimento: 'Chat' | 'Voz'
    numeroCaso: number
    dataAtendimento: string
    transcricaoId: number
    tempoLigacao: number
    comentarioGeral: string
    checklistMonitoria: Array<{
      id: number
      nota: number
      status: 'AT' | 'NT' | 'NA'
      comentario: string
      indicador: NsAuditoria.Output
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
  export type SaveOutput = { monitoriaId: number } | undefined
}

export interface IFindMonitoria {
  find: (params: NsMonitoria.FindInput) => Promise<NsMonitoria.FindOutput>
}

export interface ISaveMonitoria {
  save: (params: NsMonitoria.SaveInput) => Promise<NsMonitoria.SaveOutput>
}
