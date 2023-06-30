export namespace NsAssuntoContatoRepo {
  export type Input = null

  export type Output = [] | undefined
}

export interface IAssuntoContatoRepo {
  select: (params: NsAssuntoContatoRepo.Input) => Promise<NsAssuntoContatoRepo.Output>
}
