export namespace NsAuditoria {
  export type Input = { canalAtendimento: 'C' | 'V', auditoriaId?: number }

  export type SubItemModel = {
    subItemId: number
    nomeSubItem: string
    resumo: string
    peso: number
  }
  export type ItemModel = {
    itemId: number
    nomeItem: string
    subitens: SubItemModel[]
  }
  export type IndicadorModel = {
    indicadorId: number
    nomeIndicador: string
    itens: ItemModel[]
  }
  export type Output = Array<{
    auditoriaId: number
    nomeAuditoria: string
    indicadores: IndicadorModel[]
  }> | undefined
}

export interface IFindAuditoria {
  find: (params: NsAuditoria.Input) => Promise<NsAuditoria.Output>
}
