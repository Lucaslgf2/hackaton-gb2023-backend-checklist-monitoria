export namespace NsAssuntoContato {
  export type Input = null

  export type Output = [] | undefined
}

export interface IFindAssuntoContato {
  find: (params: NsAssuntoContato.Input) => Promise<NsAssuntoContato.Output>
}
