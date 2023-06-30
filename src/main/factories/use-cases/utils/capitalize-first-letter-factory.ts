import { CapitalizeFirstLetter } from '@/data/use-cases/utils/capitalize-first-letter'
import { ICapitalizeFirstLetter } from '@/domain/protocols/utils/capitalize-first-letter-protocol'

export const makeCapitalizeFirstLetter = (): ICapitalizeFirstLetter => {
  return new CapitalizeFirstLetter()
}
