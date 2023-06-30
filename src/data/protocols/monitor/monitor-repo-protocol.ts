export namespace NsMonitorRepo {
  export type Input = { monitorId?: number }

  export type Output = Array<{
    CodigoMonitor: number
    Nome: string
    Vs: string
  }> | undefined
}

export interface IMonitorRepo {
  select: (params: NsMonitorRepo.Input) => Promise<NsMonitorRepo.Output>
}
