export namespace NsMotivoContato {
  export type Input = { motivoContatoId?: number }

  export type Output = Array<{
    motivoContatoId: number
    descricao: string
  }> | undefined
}

export interface IFindMotivoContato {
  find: (params: NsMotivoContato.Input) => Promise<NsMotivoContato.Output>
}
