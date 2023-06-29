export namespace NsConsultorRepo {
  export type Input = null

  export type Output = Array<{
    CodigoConsultor: number
    Nome: string
    Email: string
    TempoCasa: string
    VS: string
    CelulaAtendimento: string
    Supervisor: string
  }> | undefined
}

export interface IConsultorRepo {
  select: (params: NsConsultorRepo.Input) => Promise<NsConsultorRepo.Output>
}
