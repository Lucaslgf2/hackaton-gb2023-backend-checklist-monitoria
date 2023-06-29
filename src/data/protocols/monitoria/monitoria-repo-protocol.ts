export namespace NsMonitoriaRepo {
  export type Input = null

  export type Output = [] | undefined
}

export interface IMonitoriaRepo {
  select: (params: NsMonitoriaRepo.Input) => Promise<NsMonitoriaRepo.Output>
}
