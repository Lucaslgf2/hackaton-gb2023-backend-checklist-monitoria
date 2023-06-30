import { ICrypto } from '@/data/protocols/infra-adapters/crypto/crypto-protocol'
import { CryptoAdapter } from '@/infra/adapters/crypto/crypto-adapter'

export const makeCryptoAdapter = (): ICrypto => {
  return new CryptoAdapter()
}
