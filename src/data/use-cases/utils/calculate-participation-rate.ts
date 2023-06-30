import { ICalculateParticipationRate } from '@/domain/protocols/utils/calculate-participation-rate-protocol'

export class CalculateParticipationRate implements ICalculateParticipationRate {
  calc (globalValue: number, localValue: number, decimals: number = 2, showSignal: boolean = false): string {
    if (globalValue <= 0) {
      return '-'
    }
    const participationRate = ((localValue * 100) / globalValue)
    const signal = showSignal && participationRate > 0 ? '+' : ''
    return `${signal}${participationRate.toFixed(decimals)}%`.replace('.', ',')
  }

  calc2 (globalValue: number, localValue: number, decimals: number = 2): number | null {
    if (globalValue <= 0) {
      return null
    }
    const participationRate = ((localValue * 100) / globalValue)
    return Number(participationRate.toFixed(decimals))
  }
}
