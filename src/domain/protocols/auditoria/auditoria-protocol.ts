export namespace NsAuditoria {
  export type Input = null

  export type Output = Array<{
    CodigoAuditoria: number
    Descricao: string
  }> | undefined
}

export interface IFindAuditoria {
  find: (params: NsAuditoria.Input) => Promise<NsAuditoria.Output>
}
