import { IAuditoriaRepo } from '@/data/protocols/auditoria/auditoria-repo-protocol'
import { IFindAuditoria, NsAuditoria } from '@/domain/protocols/auditoria/auditoria-protocol'

export class FindAuditoria implements IFindAuditoria {
  constructor (
    private readonly auditoriaRepo: IAuditoriaRepo
  ) {}

  async find (params: NsAuditoria.Input): Promise<NsAuditoria.Output> {
    const dbRows = await this.auditoriaRepo.select(params)
    if (dbRows) {
      const result: NsAuditoria.Output = []

      const distinctAuditoriaIds = [...new Set(dbRows.map(item => (item.CodigoAuditoria)))]
      for (const auditoriaId of distinctAuditoriaIds) {
        const objAuditoria = dbRows.find(item => (item.CodigoAuditoria === auditoriaId))
        if (objAuditoria) {
          result.push({
            auditoriaId: objAuditoria?.CodigoAuditoria,
            nomeAuditoria: objAuditoria?.DescAuditoria,
            indicadores: []
          })
        }

        const distinctIndicadorIds = [...new Set(dbRows.map(item => (item.CodigoIndicador)))]
        for (const indicadorId of distinctIndicadorIds) {
          const objIndicador = dbRows.find(item => (item.CodigoAuditoria === auditoriaId && item.CodigoIndicador === indicadorId))
          if (objIndicador) {
            result.find(item => (item.auditoriaId === auditoriaId))?.indicadores.push({
              indicadorId: objIndicador.CodigoIndicador,
              nomeIndicador: objIndicador.DescIndicador,
              itens: []
            })
          }

          const distinctItemIndicadorIds = [...new Set(dbRows.map(item => (item.CodigoItemIndicador)))]
          for (const itemIndicadorId of distinctItemIndicadorIds) {
            const objItemIndicador = dbRows.find(item => (item.CodigoAuditoria === auditoriaId && item.CodigoIndicador === indicadorId && item.CodigoItemIndicador === itemIndicadorId))
            if (objItemIndicador) {
              result.find(item => (item.auditoriaId === auditoriaId))?.indicadores.find(item => (item.indicadorId === indicadorId))?.itens.push({
                itemId: objItemIndicador.CodigoItemIndicador,
                nomeItem: objItemIndicador.DescItemIndicador,
                subitens: []
              })
            }

            const distinctSubItemIndicadorIds = [...new Set(dbRows.map(item => (item.CodigoSubItemIndicador)))]
            for (const subItemIndicadorId of distinctSubItemIndicadorIds) {
              const objSubItemIndicador = dbRows.find(item => (item.CodigoAuditoria === auditoriaId && item.CodigoIndicador === indicadorId && item.CodigoItemIndicador === itemIndicadorId && item.CodigoSubItemIndicador === subItemIndicadorId))
              if (objSubItemIndicador) {
                result.find(item => (item.auditoriaId === auditoriaId))?.indicadores.find(item => (item.indicadorId === indicadorId))?.itens.find(item => (item.itemId === itemIndicadorId))?.subitens.push({
                  subItemId: objSubItemIndicador.CodigoSubItemIndicador,
                  nomeSubItem: objSubItemIndicador.DescSubItemIndicador,
                  resumo: objSubItemIndicador.Resumo,
                  peso: objSubItemIndicador.Peso
                })
              }
            }
          }
        }
      }
      return result
    }
  }
}
