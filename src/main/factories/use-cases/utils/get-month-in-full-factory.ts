import { GetMonthInFull } from '@/data/use-cases/utils/get-month-in-full'
import { IGetMonthInFull } from '@/domain/protocols/utils/get-month-in-full-protocol'

export const makeGetMonthInFull = (): IGetMonthInFull => {
  return new GetMonthInFull()
}
