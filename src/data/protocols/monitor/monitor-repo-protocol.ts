export namespace NsMonitorRepo {
  export type Input = null

  export type Output = [] | undefined
}

export interface IMonitorRepo {
  select: (params: NsMonitorRepo.Input) => Promise<NsMonitorRepo.Output>
}
