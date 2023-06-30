export namespace NsMotivoContatoRepo {
  export type Input = null

  export type Output = [] | undefined
}

export interface IMotivoContatoRepo {
  select: (params: NsMotivoContatoRepo.Input) => Promise<NsMotivoContatoRepo.Output>
}
