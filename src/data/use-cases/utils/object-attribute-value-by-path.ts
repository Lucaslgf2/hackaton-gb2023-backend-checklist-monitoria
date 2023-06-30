import { IObjectAttributeValueByPath } from '@/domain/protocols/utils/object-attribute-value-by-path-protocol'

export class ObjectAttributeValueByPath implements IObjectAttributeValueByPath {
  obtain (obj: any, path: string): any {
    const paths = path.split('.')
    let current = obj
    for (const value of paths) {
      if (current[value] === undefined) {
        return undefined
      } else {
        current = current[value]
      }
    }
    return current
  }
}
