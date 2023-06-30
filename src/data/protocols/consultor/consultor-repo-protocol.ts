export namespace NsConsultorRepo {
  export type Input = { consultorId?: number }

  export type Output = Array<{
    CodigoConsultor: number
    Nome: string
    Email: string
    Vs: string
    TempoCasa: string
    CelulaAtendimento: string
    Supervisor: string
  }> | undefined
}

export interface IConsultorRepo {
  select: (params: NsConsultorRepo.Input) => Promise<NsConsultorRepo.Output>
}
