import { IGetMonthInFull } from '@/domain/protocols/utils/get-month-in-full-protocol'

export class GetMonthInFull implements IGetMonthInFull {
  get (month: number): string {
    const monthInFull = new Date(0, month - 1).toLocaleString('pt-BR', { month: 'short' }).replace('.', '')
    const result = monthInFull.charAt(0).toUpperCase() + monthInFull.slice(1)
    return result
  }
}
