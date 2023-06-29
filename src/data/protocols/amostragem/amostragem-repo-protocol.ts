export namespace NsAmostragemRepo {
  export type Input = null

  export type Output = [] | undefined
}

export interface IAmostragemRepo {
  select: (params: NsAmostragemRepo.Input) => Promise<NsAmostragemRepo.Output>
}
