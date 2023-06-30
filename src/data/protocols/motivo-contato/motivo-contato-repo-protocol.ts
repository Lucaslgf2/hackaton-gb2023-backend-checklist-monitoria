export namespace NsMotivoContatoRepo {
  export type Input = { motivoContatoId?: number }

  export type Output = Array<{
    CodigoMotivoContato: number
    Descricao: string
  }> | undefined
}

export interface IMotivoContatoRepo {
  select: (params: NsMotivoContatoRepo.Input) => Promise<NsMotivoContatoRepo.Output>
}
