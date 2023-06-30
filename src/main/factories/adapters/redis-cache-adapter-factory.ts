import { RedisCacheAdapter } from '@/main/adapters/redis/redis-cache-adapter'
import { IRedisCache } from '@/main/adapters/redis/redis-cache-protocols'
import { makeEnvVariables } from '@/main/config/envVariables'

export const makeRedisCacheAdapter = (): IRedisCache => {
  const envVariables = makeEnvVariables()
  return new RedisCacheAdapter(envVariables.environment, envVariables.redisCache.host, Number(envVariables.redisCache.port), '', '')
}
