export namespace NsAmostragem {
  export type Input = { amostragemId?: number }

  export type Output = Array<{
    amostragemId: number
    descricao: string
  }> | undefined
}

export interface IFindAmostragem {
  find: (params: NsAmostragem.Input) => Promise<NsAmostragem.Output>
}
