export namespace NsRotaTesteAuditoriaAtendimentoRepo {
  export type Input = null

  export type Output = [] | undefined
}

export interface IRotaTesteAuditoriaAtendimentoRepo {
  select: (params: NsRotaTesteAuditoriaAtendimentoRepo.Input) => Promise<NsRotaTesteAuditoriaAtendimentoRepo.Output>
}
