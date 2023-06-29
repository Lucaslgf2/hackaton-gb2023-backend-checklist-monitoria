import { ObjectAttributeValueByPath } from '@/data/use-cases/utils/object-attribute-value-by-path'
import { IObjectAttributeValueByPath } from '@/domain/protocols/utils/object-attribute-value-by-path-protocol'

export const makeObjectAttributeValueByPath = (): IObjectAttributeValueByPath => {
  return new ObjectAttributeValueByPath()
}
