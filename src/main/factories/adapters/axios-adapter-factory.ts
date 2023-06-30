import { IHttpClient } from '@/data/protocols/infra-adapters/http-client/http-client-protocol'
import { AxiosAdapter } from '@/infra/adapters/axios/axios-adapter'

export const makeAxiosAdapter = (): IHttpClient => {
  return new AxiosAdapter()
}
