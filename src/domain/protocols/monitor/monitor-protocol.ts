export namespace NsMonitor {
  export type Input = { monitorId?: number }

  export type Output = Array<{
    monitorId: number
    nomeMonitor: string
    vs: string
  }> | undefined
}

export interface IFindMonitor {
  find: (params: NsMonitor.Input) => Promise<NsMonitor.Output>
}
