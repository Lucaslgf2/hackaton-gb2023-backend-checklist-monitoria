import { IConvertStringToNumber } from '@/domain/protocols/utils/convert-string-to-number-protocol'

export class ConvertStringToNumber implements IConvertStringToNumber {
  private readonly NUMERIC_REGEXP = /[-]{0,1}[\d]*[,]{0,1}[\d]+/g

  convert (value: string): number {
    return Number(value.match(this.NUMERIC_REGEXP)?.join('').replace(',', '.') ?? 0)
  }
}
