export namespace NsMonitoria {
  export type Input = null

  export type Output = [] | undefined
}

export interface ISaveMonitoria {
  save: (params: NsMonitoria.Input) => Promise<NsMonitoria.Output>
}
