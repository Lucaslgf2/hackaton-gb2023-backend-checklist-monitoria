export namespace NsSubMotivoContatoRepo {
  export type Input = { motivoContatoId: number }

  export type Output = Array<{
    CodigoMotivoContato: number
    CodigoSubMotivoContato: number
    Descricao: string
  }> | undefined
}

export interface ISubMotivoContatoRepo {
  select: (params: NsSubMotivoContatoRepo.Input) => Promise<NsSubMotivoContatoRepo.Output>
}
