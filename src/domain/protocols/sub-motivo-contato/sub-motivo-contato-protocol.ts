export namespace NsSubMotivoContato {
  export type Input = null

  export type Output = [] | undefined
}

export interface IFindSubMotivoContato {
  find: (params: NsSubMotivoContato.Input) => Promise<NsSubMotivoContato.Output>
}
