import { ICalculateGrowthRate } from '@/domain/protocols/utils/calculate-growth-rate-protocol'

export class CalculateGrowthRate implements ICalculateGrowthRate {
  calc (totalPreviousPeriod: number, totalCurrentPeriod: number, decimals: number = 2, showSignal: boolean = true): string {
    if (totalCurrentPeriod > 0 && totalPreviousPeriod === 0) {
      return '-'
    }
    if (totalPreviousPeriod === 0) {
      return `${'0,'.padEnd(2 + decimals, '0')}%`
    }

    const growthRate = (((totalCurrentPeriod - totalPreviousPeriod) / totalPreviousPeriod) * 100)
    const signal = showSignal && growthRate > 0 ? '+' : ''

    return `${signal}${growthRate.toFixed(decimals)}%`.replace('.', ',')
  }

  calc2 (totalPreviousPeriod: number, totalCurrentPeriod: number, decimals: number = 0): number | null {
    if (totalCurrentPeriod > 0 && totalPreviousPeriod === 0) return null
    if (totalPreviousPeriod === 0) return 0

    const growthRate = (((totalCurrentPeriod - totalPreviousPeriod) / totalPreviousPeriod) * 100)
    return decimals > 0 ? Number(growthRate.toFixed(decimals)) : growthRate
  }
}
