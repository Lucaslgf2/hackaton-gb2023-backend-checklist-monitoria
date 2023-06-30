export namespace NsMotivoContato {
  export type Input = null

  export type Output = [] | undefined
}

export interface IFindMotivoContato {
  find: (params: NsMotivoContato.Input) => Promise<NsMotivoContato.Output>
}
