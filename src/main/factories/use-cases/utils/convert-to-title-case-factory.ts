import { ConvertToTitleCase } from '@/data/use-cases/utils/convert-to-title-case'
import { IConvertToTitleCase } from '@/domain/protocols/utils/convert-to-title-case-protocol'

export const makeConvertToTitleCase = (): IConvertToTitleCase => {
  return new ConvertToTitleCase()
}
