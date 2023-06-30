import { IDecodeToken } from '@/data/protocols/infra-adapters/jwt/decode-token'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements IDecodeToken {
  decode (tokenJwt: string): any | undefined {
    const jwtDecoded = jwt.decode(tokenJwt)
    if (jwtDecoded) {
      return typeof jwtDecoded === 'string' ? { payload: jwtDecoded } : jwtDecoded
    }
  }
}
