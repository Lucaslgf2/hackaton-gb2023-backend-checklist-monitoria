import { ICapitalizeFirstLetter } from '@/domain/protocols/utils/capitalize-first-letter-protocol'

export class CapitalizeFirstLetter implements ICapitalizeFirstLetter {
  convert ([first = '', ...rest]: string): string {
    return [first.toUpperCase(), ...rest].join('')
  }
}
