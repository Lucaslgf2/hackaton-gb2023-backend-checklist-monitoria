import { IAuditoriaRepo } from '@/data/protocols/auditoria/auditoria-repo-protocol'
import { IFindAuditoria, NsAuditoria } from '@/domain/protocols/auditoria/auditoria-protocol'

export class FindAuditoria implements IFindAuditoria {
  constructor (
    private readonly auditoriaRepo: IAuditoriaRepo
  ) {}

  async find (params: NsAuditoria.Input): Promise<NsAuditoria.Output> {
    const dbRows = await this.auditoriaRepo.select(params)
    console.log(dbRows)
    return [
      {
        auditoriaId: 1,
        nomeAuditoria: 'Assertividade',
        indicadores: [
          {
            indicadorId: 1,
            nomeIndicador: 'Satisfação',
            itens: [
              {
                itemId: 1,
                nomeItem: 'Prontidão',
                subitens: [
                  {
                    subItemId: 1,
                    nomeSubItem: 'Saudação',
                    descricao: 'Atender prontamente dentro dos parametros acordados.\n\n0- CSF\n\nTelefone: 5 segundos | Chat: 30 segundos',
                    Peso: 7
                  }
                ]
              },
              {
                itemId: 2,
                nomeItem: 'Manutenção do diálogo',
                subitens: [
                  {
                    subItemId: 1,
                    nomeSubItem: 'Manutenção do diálogo',
                    descricao: 'Fone: 3 minutos ou combinado previamente.\n\nChat: 5 minutos ou combinado previamente.',
                    Peso: 5
                  }
                ]
              },
              {
                itemId: 3,
                nomeItem: 'Linguagem',
                subitens: [
                  {
                    subItemId: 1,
                    nomeSubItem: 'Uso incorreto da linguagem Erro de ortografia / digitação / pronúncia / Gerundismo / pontuação / acentuação / escrita / caixa alta.',
                    descricao: 'Se o assistente cometeu 3 erros de linguagem ele será pontuado. Sem tolerância para casos que o erro mude o sentido da palavra ou da frase.',
                    Peso: 9
                  }
                ]
              }

            ]
          }
        ]
      }
    ]
  }
}
