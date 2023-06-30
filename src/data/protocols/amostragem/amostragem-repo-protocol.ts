export namespace NsAmostragemRepo {
  export type Input = { amostragemId?: number }

  export type Output = Array<{
    CodigoAmostragem: number
    Descricao: string
  }> | undefined
}

export interface IAmostragemRepo {
  select: (params: NsAmostragemRepo.Input) => Promise<NsAmostragemRepo.Output>
}
