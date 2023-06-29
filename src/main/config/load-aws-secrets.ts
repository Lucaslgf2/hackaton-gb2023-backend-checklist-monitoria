import loggerWinston from '@/main/adapters/winston-log/winston-log-adapter'
import { makeSecretsLoaderAdapter } from '@/main/factories/adapters/secrets-loader-adapter-factory'

// Função que para carregar as variaveis de ambiente da AWS no 'process.env' no NodeJs.
export const loadAwsSecrets = async (): Promise<void> => {
  try {
    const secretsLoaderAdapter = makeSecretsLoaderAdapter()
    await Promise.all([
      secretsLoaderAdapter.initSecrets('ALL_ENV_VAR', 'backend-dashboards-secrets'),
      secretsLoaderAdapter.initSecrets('REDIS_CACHE', 'backend-core-pgi-redis-cache-redis-conn-string')
    ])
  } catch (error: any) {
    loggerWinston.error('loadAwsSecrets - ', error)
  }
}
