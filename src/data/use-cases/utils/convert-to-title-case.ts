import { IConvertToTitleCase } from '@/domain/protocols/utils/convert-to-title-case-protocol'

export class ConvertToTitleCase implements IConvertToTitleCase {
  convert (value: string): string {
    const result = value.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
    return result
  }
}
