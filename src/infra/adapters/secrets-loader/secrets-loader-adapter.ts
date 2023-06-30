/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { ISecretsLoader } from '@/data/protocols/infra-adapters/secrets-loader/secrets-loader-protocol'
import loggerWinston from '@/main/adapters/winston-log/winston-log-adapter'
import { SecretsLoader } from '@grupoboticario/secrets-loader'
import NodeCache from 'node-cache'
const secretsCache = new NodeCache()

export class SecretsLoaderAdapter implements ISecretsLoader {
  async initSecrets (envVarName: string, awsSecretName: string): Promise<void> {
    try {
      if (process.env.ENVIRONMENT !== 'local' && process.env.NODE_ENV !== 'test' && !process.env[envVarName]) {
        const oldProcessEnv = JSON.parse(JSON.stringify(process.env))

        const envVarCache = secretsCache.get(envVarName)
        if (envVarCache) {
          process.env[envVarName] = envVarCache as string
        } else {
          const secretsLoader = new SecretsLoader()
          await secretsLoader.loadSecrets([{ EnvVarName: envVarName, SecretId: awsSecretName }])
          secretsCache.set(envVarName, process.env[envVarName])
        }

        const differences = this.compareObjects(oldProcessEnv, process.env)
        differences.forEach(item => {
          const newPropertyName = envVarName ? `${envVarName.toUpperCase()}_${item.toUpperCase()}` : item.toUpperCase()
          process.env[newPropertyName] = process.env[item]
          delete process.env[item]
        })
      }
    } catch (error: any) {
      loggerWinston.error('secretsLoaderAdapter - ', error)
    }
  }

  private compareObjects (obj1: any, obj2: any): string[] {
    const result: string[] = []
    for (const key of Object.keys(obj2)) {
      if (!(key in obj1)) {
        if (key.toUpperCase() !== key) {
          result.push(key)
        }
      }
    }
    return result
  }
}
