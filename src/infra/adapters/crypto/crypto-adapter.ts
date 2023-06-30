import { ICrypto } from '@/data/protocols/infra-adapters/crypto/crypto-protocol'
import { randomBytes, randomUUID } from 'crypto'

export class CryptoAdapter implements ICrypto {
  generateUUID (): string {
    return randomUUID()
  }

  generateHash (size: number = 6): string {
    return randomBytes(size).toString('hex')
  }
}
