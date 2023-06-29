import { IConvertIsoDateToLocalDate } from '@/domain/protocols/utils/convert-iso-date-to-local-date-protocol'

export class ConvertIsoDateToLocalDate implements IConvertIsoDateToLocalDate {
  convert (isoDate: string): string {
    const splitDate = isoDate?.split('-')
    if (splitDate?.length === 3) {
      const result = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`
      return result
    }
    return '-'
  }
}
