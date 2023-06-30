import { IFormatThousandSeparator } from '@/domain/protocols/utils/format-thousand-separator-protocol'

export class FormatThousandSeparator implements IFormatThousandSeparator {
  format (value: number, decimals: number = 2): string {
    const result = value.toFixed(decimals).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    return result
  }
}
