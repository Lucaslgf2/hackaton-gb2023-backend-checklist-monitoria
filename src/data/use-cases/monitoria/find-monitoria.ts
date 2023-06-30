import { IMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { IFindMonitoria, NsMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'

export class FindMonitoria implements IFindMonitoria {
  constructor (
    private readonly monitoriaRepo: IMonitoriaRepo
  ) {}

  async find (params: NsMonitoria.FindInput): Promise<NsMonitoria.FindOutput> {
    const dbRows = await this.monitoriaRepo.select(params)
    if (dbRows) {
      const result: NsMonitoria.FindOutput = []

      const distinctMonitoriaIds = [...new Set(dbRows.map(item => (item.CodigoMonitoria)))]
      for (const monitoriaId of distinctMonitoriaIds) {
        const objFind = dbRows.find(aux => (aux.CodigoMonitoria === monitoriaId))
        if (objFind) {
          result.push({
            monitoriaId: objFind.CodigoMonitoria,
            dataMonitoria: objFind.DataCriacaoMonitoria,
            canalAtendimento: objFind.SiglaCanal === 'C' ? 'Chat' : 'Voz',
            numeroCaso: objFind.NumeroCaso,
            dataAtendimento: objFind.DataAtendimento,
            transcricaoId: objFind.NumeroTranscricao,
            tempoLigacao: objFind.DuracaoLigacao,
            comentarioGeral: objFind.ComentarioGeral,
            checklistMonitoria: dbRows.filter(aux => (aux.CodigoMonitoria === monitoriaId)).map(checklistItem => {
              return {
                id: checklistItem.CodigoChecklistMonitoria,
                nota: checklistItem.Nota,
                status: checklistItem.Status as 'AT' | 'NT' | 'NA',
                comentario: checklistItem.Comentario,
                indicador: {
                  indicadorId: checklistItem.CodigoIndicador,
                  nomeIndicador: checklistItem.DescIndicador,
                  item: {
                    itemId: checklistItem.CodigoItemIndicador,
                    nomeItem: checklistItem.DescItemIndicador,
                    subitem: {
                      subItemId: checklistItem.CodigoSubItemIndicador,
                      nomeSubItem: checklistItem.DescSubItemIndicador,
                      resumo: checklistItem.Resumo,
                      peso: checklistItem.Peso
                    }
                  }
                }
              }
            }),
            auditoria: {
              auditoriaId: objFind.CodigoAuditoria,
              nomeAuditoria: objFind.DescAuditoria
            },
            consultor: {
              consultorId: objFind.CodigoConsultor,
              nomeConsultor: objFind.NomeConsultor,
              email: objFind.EmailConsultor,
              tempoCasa: objFind.TempoCasa,
              vs: objFind.VsConsultor,
              celulaAtendimento: objFind.CelulaAtendimento,
              supervisor: objFind.Supervisor,
              avayaId: objFind.NumeroAvaya
            },
            monitor: {
              monitorId: objFind.CodigoMonitor,
              nomeMonitor: objFind.NomeMonitor,
              vs: objFind.VsMonitor
            },
            amostragem: {
              amostragemId: objFind.CodigoAmostragem,
              descricao: objFind.DescAmostragem
            },
            motivoContato: {
              motivoContatoId: objFind.CodigoMotivoContato,
              descricao: objFind.DescMotivoContato,
              subMotivoContato: {
                subMotivoContatoId: objFind.CodigoSubMotivoContato,
                descricao: objFind.DescSubMotivoContato,
                assuntoContato: {
                  assuntoContatoId: objFind.CodigoAssuntoContato,
                  descricao: objFind.DescAssuntoContato
                }
              }
            }
          })
        }
      }

      return result
    }
  }
}
