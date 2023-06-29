import { IConvertStringToNumber } from '@/domain/protocols/utils/convert-string-to-number-protocol'
import { IObjectAttributeValueByPath } from '@/domain/protocols/utils/object-attribute-value-by-path-protocol'
import { ISortArray } from '@/domain/protocols/utils/sort-array-protocol'

export class SortArray implements ISortArray {
  constructor (
    private readonly objectAttributeValueByPath: IObjectAttributeValueByPath,
    private readonly convertStringToNumber: IConvertStringToNumber
  ) {}

  sort (list: any[], key: string, order: 'ASC' | 'DESC', isNumber: boolean = false): void {
    const asc = order === 'ASC'
    list.sort((a, b) => {
      const obtainA = this.objectAttributeValueByPath.obtain(a, key)
      const valueA = isNumber ? (obtainA === '-' ? 0 : typeof obtainA === 'string' ? this.convertStringToNumber.convert(obtainA) : obtainA) : obtainA

      const obtainB = this.objectAttributeValueByPath.obtain(b, key)
      const valueB = isNumber ? (obtainB === '-' ? 0 : typeof obtainB === 'string' ? this.convertStringToNumber.convert(obtainB) : obtainB) : obtainB

      const result = (asc ? valueA > valueB : valueA <= valueB) ? 1 : -1
      return result
    })
  }

  sortCustom (list: any[], key: string, order: Record<string, number>): void {
    list.sort((a, b) => {
      const orderA = order[a[key]]
      const orderB = order[b[key]]
      if (orderA === orderB) {
        return a[key].localeCompare(b[key])
      }
      return orderA - orderB
    })
  }
}
