import { CalculateGrowthRate } from '@/data/use-cases/utils/calculate-growth-rate'
import { ICalculateGrowthRate } from '@/domain/protocols/utils/calculate-growth-rate-protocol'

export const makeCalculateGrowthRate = (): ICalculateGrowthRate => {
  return new CalculateGrowthRate()
}
