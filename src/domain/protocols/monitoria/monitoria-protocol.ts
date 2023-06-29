export namespace NsMonitoria {
  export type Input = null

  export type Output = [] | undefined
}

export interface IFindMonitoria {
  find: (params: NsMonitoria.Input) => Promise<NsMonitoria.Output>
}
