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
          tempoLigacao: '01:00',
          comentarioGeral: 'XXX',
          checklistMonitoria: [
            {
              id: 1,
              nota: 1,
              status: 'AT',
              comentario: 'XXX',
              indicador: {
                indicadorId: 1,
                nomeIndicador: '',
                item: {
                  itemId: 1,
                  nomeItem: '',
                  subitem: {
                    subItemId: 1,
                    nomeSubItem: '',
                    resumo: '',
                    peso: 1
                  }
                }
              }
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
