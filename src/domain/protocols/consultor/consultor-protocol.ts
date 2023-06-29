export namespace NsConsultor {
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

export interface IFindConsultor {
  find: (params: NsConsultor.Input) => Promise<NsConsultor.Output>
}
