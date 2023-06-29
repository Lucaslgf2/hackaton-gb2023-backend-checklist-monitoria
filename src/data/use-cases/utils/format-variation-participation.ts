import { IFormatThousandSeparator } from '@/domain/protocols/utils/format-thousand-separator-protocol'
import { IFormatVariationParticipation } from '@/domain/protocols/utils/format-variation-participation-protocol'

export class FormatVariationParticipation implements IFormatVariationParticipation {
  constructor (
    private readonly formatThousandSeparator: IFormatThousandSeparator
  ) {}

  format (value: number, decimals: number = 2): string {
    const signal = value > 0 ? '+' : ''
    return `${signal}${this.formatThousandSeparator.format(value, decimals)} P.P`
  }

  calcAndformat (globalPreviousValue: number, localPreviousValue: number, globalCurrentValue: number, localCurrentValue: number, decimals: number = 2): string {
    const previousParticipationRate = globalPreviousValue > 0 ? ((localPreviousValue * 100) / globalPreviousValue) : 0
    const currentParticipationRate = globalCurrentValue > 0 ? ((localCurrentValue * 100) / globalCurrentValue) : 0
    const variationParticipation = currentParticipationRate - previousParticipationRate
    const result = this.format(variationParticipation, decimals)
    return result
  }
}
