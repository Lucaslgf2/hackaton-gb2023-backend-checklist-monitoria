export namespace NsAuditoriaRepo {
  export type Input = null

  export type Output = Array<{
    CodigoAuditoria: number
    Descricao: string
  }> | undefined
}

export interface IAuditoriaRepo {
  select: (params: NsAuditoriaRepo.Input) => Promise<NsAuditoriaRepo.Output>
}
