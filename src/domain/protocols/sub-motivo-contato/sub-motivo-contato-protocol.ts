export namespace NsSubMotivoContato {
  export type Input = { motivoContatoId: number }

  export type Output = Array<{
    motivoContatoId: number
    subMotivoContatoId: number
    descricao: string
  }> | undefined
}

export interface IFindSubMotivoContato {
  find: (params: NsSubMotivoContato.Input) => Promise<NsSubMotivoContato.Output>
}
