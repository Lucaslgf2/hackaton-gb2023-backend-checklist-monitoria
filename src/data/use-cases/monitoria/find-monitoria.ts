import { IMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { IFindMonitoria, NsMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'

export class FindMonitoria implements IFindMonitoria {
  constructor (
    private readonly monitoriaRepo: IMonitoriaRepo
  ) {}

  async find (params: NsMonitoria.FindInput): Promise<NsMonitoria.FindOutput> {
    const dbRows = await this.monitoriaRepo.select(params)
    if (dbRows) {
      return [
        {
          monitoriaId: 1,
          dataMonitoria: 'XXX',
          canalAtendimento: 'Chat',
          numeroCaso: 1,
          dataAtendimento: 'XXX',
          transcricaoId: 1,
          tempoLigacao: 1,
          comentarioGeral: 'XXX',
          checklistMonitoria: [
            {
              id: 1,
              nota: 1,
              status: 'AT',
              comentario: 'XXX',
              indicador: []
            }
          ],
          auditoria: {
            auditoriaId: 1,
            nomeAuditoria: 'XXX'
          },
          consultor: {
            consultorId: 1,
            nomeConsultor: 'XXX',
            email: 'XXX',
            tempoCasa: 'XXX',
            vs: 'XXX',
            celulaAtendimento: 'XXX',
            supervisor: 'XXX',
            avayaId: 'XXX'
          },
          monitor: {
            monitorId: 1,
            nomeMonitor: 'XXX',
            vs: 'XXX'
          },
          amostragem: {
            amostragemId: 1,
            descricao: 'XXX'
          },
          motivoContato: {
            motivoContatoId: 1,
            descricao: 'XXX',
            subMotivoContato: {
              subMotivoContatoId: 1,
              descricao: 'XXX',
              assuntoContato: {
                assuntoContatoId: 1,
                descricao: 'XXX'
              }
            }
          }
        }
      ]
    }
  }
}

/*  const result: NsMonitoria.FindOutput = []

      const distinctMonitoriaIds = [...new Set(dbRows.map(item => (item.CodigoMonitoria)))]
      for (const monitoriaId of distinctMonitoriaIds) {
        const objMonitoria = dbRows.find(item => (item.CodigoMonitoria === monitoriaId))
        if (objMonitoria) {
          const auditoria = await this.findAuditoria.find({ canalAtendimento: objMonitoria.SiglaCanal, auditoriaId: objMonitoria.CodigoAuditoria })
          const consultor = await this.findConsultor.find({ consultorId: objMonitoria.CodigoConsultor })
          const monitor = await this.findMonitor.find({ monitorId: objMonitoria.CodigoMonitor })
          const amostragem = await this.findAmostragem.find({ amostragemId: objMonitoria.CodigoAmostragem })

          result.push({
            monitoriaId: objMonitoria.CodigoMonitoria,
            dataMonitoria: objMonitoria.DataCriacaoMonitoria,
            canalAtendimento: objMonitoria.SiglaCanal === 'C' ? 'Chat' : 'Voz',
            numeroCaso: Number(objMonitoria.Numero1,
            dataAtendimento: objMonitoria.DataAtendimento,
            transcricaoId: Number(objMonitoria.NumeroTranscr1,
            tempoLigacao: objMonitoria.DuracaoLigacao,
            comentarioGeral: objMonitoria.ComentarioGeral,
            auditoria: {
              auditoriaId: auditoria[0].auditoriaId,
              nomeAuditoria:auditoria[0].nomeAuditoria
            },
            consultor,
            monitor,
            amostragem,
          })
      }
    }
    //return dbRows?.map(async item => {

      const assuntoContato = await this.findAssuntoContato.find({ motivoSubContatoId: 1 })
      const subMotivoContato = await this.findSubMotivoContato.find({ motivoContatoId: 1 })
      const motivoContato = await this.findMotivoContato.find({ motivoContatoId: 1 })

      return {
        monitoriaId: item.CodigoMonitoria,
        dataMonitoria: item.DataCriacaoMonitoria,
        canalAtendimento: item.SiglaCanal === 'C' ? 'Chat' : 'Voz',
        numeroCaso: item.NumeroCaso,
        dataAtendimento: item.DataAtendimento,
        transcricaoId: item.NumeroTranscricao,
        tempoLigacao: item.DuracaoLigacao,
        comentarioGeral: item.ComentarioGeral,
        checklistMonitoria: [
          {
            id: 1,
            nota: 1,
            status: 'AT' | 'NT' | 'NA'
            comentario: "XXX",
            indicador: NsAuditoria.Output
          }
        ],
        auditoria,
        consultor,
        monitor,
        amostragem,
        motivoContato: {
          motivoContatoId: 1,
          descricao: 'X',
          subMotivoContato: {
            subMotivoContatoId: 1,
            descricao: 'X',
            assuntoContato: {
              assuntoContatoId: 1,
              descricao: 'X'
            }
          }
        }
      }
    //})
  }
}
*/
