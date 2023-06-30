export namespace NsAssuntoContatoRepo {
  export type Input = { motivoSubContatoId: number }

  export type Output = Array<{
    CodigoSubMotivoContato: number
    CodigoAssuntoContato: number
    Descricao: string
  }> | undefined
}

export interface IAssuntoContatoRepo {
  select: (params: NsAssuntoContatoRepo.Input) => Promise<NsAssuntoContatoRepo.Output>
}
