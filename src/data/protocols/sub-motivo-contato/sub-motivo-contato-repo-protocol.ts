export namespace NsSubMotivoContatoRepo {
  export type Input = null

  export type Output = [] | undefined
}

export interface ISubMotivoContatoRepo {
  select: (params: NsSubMotivoContatoRepo.Input) => Promise<NsSubMotivoContatoRepo.Output>
}
