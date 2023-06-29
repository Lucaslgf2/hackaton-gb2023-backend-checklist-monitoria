import { CalculateParticipationRate } from '@/data/use-cases/utils/calculate-participation-rate'
import { ICalculateParticipationRate } from '@/domain/protocols/utils/calculate-participation-rate-protocol'

export const makeCalculateParticipationRate = (): ICalculateParticipationRate => {
  return new CalculateParticipationRate()
}
