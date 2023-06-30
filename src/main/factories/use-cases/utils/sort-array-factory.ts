import { SortArray } from '@/data/use-cases/utils/sort-array'
import { ISortArray } from '@/domain/protocols/utils/sort-array-protocol'
import { makeConvertStringToNumber } from './convert-string-to-number-factory'
import { makeObjectAttributeValueByPath } from './object-attribute-value-by-path-factory'

export const makeSortArray = (): ISortArray => {
  return new SortArray(makeObjectAttributeValueByPath(), makeConvertStringToNumber())
}
