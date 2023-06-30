export namespace NsConsultor {
  export type Input = { consultorId?: number }

  export type Output = Array<{
    consultorId: number
    nomeConsultor: string
    email: string
    tempoCasa: string
    vs: string
    celulaAtendimento: string
    supervisor: string
    avayaId: string
  }> | undefined
}

export interface IFindConsultor {
  find: (params: NsConsultor.Input) => Promise<NsConsultor.Output>
}
