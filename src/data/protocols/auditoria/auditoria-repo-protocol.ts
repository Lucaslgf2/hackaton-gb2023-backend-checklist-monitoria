export namespace NsAuditoriaRepo {
  export type Input = { auditoriaId?: number }

  export type Output = Array<{
    CodigoAuditoria: number
    DescAuditoria: string
    CodigoIndicador: number
    DescIndicador: string
    CodigoItemIndicador: number
    DescItemIndicador: string
    CodigoSubItemIndicador: number
    DescSubItemIndicador: string
    Resumo: string
    Peso: number
  }> | undefined
}

export interface IAuditoriaRepo {
  select: (params: NsAuditoriaRepo.Input) => Promise<NsAuditoriaRepo.Output>
}
