export namespace NsAssuntoContato {
  export type Input = { motivoSubContatoId: number }

  export type Output = Array<{
    motivoSubContatoId: number
    assuntoContatoId: number
    descricao: string
  }> | undefined
}

export interface IFindAssuntoContato {
  find: (params: NsAssuntoContato.Input) => Promise<NsAssuntoContato.Output>
}
