export namespace NsMonitor {
  export type Input = null

  export type Output = Array<{
    monitorId: number
    nomeMonitor: string
  }> | undefined
}

export interface IFindMonitor {
  find: (params: NsMonitor.Input) => Promise<NsMonitor.Output>
}
