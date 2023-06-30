import { ISecretsLoader } from '@/data/protocols/infra-adapters/secrets-loader/secrets-loader-protocol'
import { SecretsLoaderAdapter } from '@/infra/adapters/secrets-loader/secrets-loader-adapter'

export const makeSecretsLoaderAdapter = (): ISecretsLoader => {
  return new SecretsLoaderAdapter()
}
