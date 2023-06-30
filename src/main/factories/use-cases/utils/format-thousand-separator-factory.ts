import { FormatThousandSeparator } from '@/data/use-cases/utils/format-thousand-separator'
import { IFormatThousandSeparator } from '@/domain/protocols/utils/format-thousand-separator-protocol'

export const makeFormatThousandSeparator = (): IFormatThousandSeparator => {
  return new FormatThousandSeparator()
}
