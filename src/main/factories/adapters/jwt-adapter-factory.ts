import { IDecodeToken } from '@/data/protocols/infra-adapters/jwt/decode-token'
import { JwtAdapter } from '@/infra/adapters/jwt/jwt-adapter'

export const makeJwtDefaultAdapter = (): IDecodeToken => {
  return new JwtAdapter()
}
