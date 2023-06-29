export interface ISortArray {
  sort: (list: any[], key: string, order: 'ASC' | 'DESC', isNumber?: boolean) => void
  sortCustom: (list: any[], key: string, order: Record<string, number>) => void
}
