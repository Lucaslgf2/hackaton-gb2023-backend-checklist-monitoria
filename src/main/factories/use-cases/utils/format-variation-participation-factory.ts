import { FormatVariationParticipation } from '@/data/use-cases/utils/format-variation-participation'
import { IFormatVariationParticipation } from '@/domain/protocols/utils/format-variation-participation-protocol'
import { makeFormatThousandSeparator } from './format-thousand-separator-factory'

export const makeFormatVariationParticipation = (): IFormatVariationParticipation => {
  return new FormatVariationParticipation(makeFormatThousandSeparator())
}
