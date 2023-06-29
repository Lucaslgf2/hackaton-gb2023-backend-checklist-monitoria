export namespace NsAuditoria {
  export type Input = null

  export type Output = Array<{
    auditoriaId: number
    nomeAuditoria: string
    indicadores: Array<{
      indicadorId: number
      nomeIndicador: string
      itens: Array<{
        itemId: number
        nomeItem: string
        subitens: Array<{
          subItemId: number
          nomeSubItem: string
          descricao: string
          Peso: number
        }>
      }>
    }>
  }> | undefined
}

export interface IFindAuditoria {
  find: (params: NsAuditoria.Input) => Promise<NsAuditoria.Output>
}
