import { ConvertStringToNumber } from '@/data/use-cases/utils/convert-string-to-number'
import { IConvertStringToNumber } from '@/domain/protocols/utils/convert-string-to-number-protocol'

export const makeConvertStringToNumber = (): IConvertStringToNumber => {
  return new ConvertStringToNumber()
}
