import { createClient, RedisClientType } from 'redis'
import { IRedisCache } from './redis-cache-protocols'

let redisClient: RedisClientType

export class RedisCacheAdapter implements IRedisCache {
  private readonly prefix: string = 'cache:'

  constructor (
    private readonly environment: string,
    private readonly host: string,
    private readonly port: number,
    private readonly username: string,
    private readonly password: string
  ) {
    this.prefix = `cache:${this.environment.toUpperCase()}:`

    if (!redisClient) {
      redisClient = createClient({ url: `redis://${this.username}:${this.password}@${this.host}:${this.port}` })
      console.time('RedisClientConnection-time')
      void redisClient.connect().finally(() => { console.timeEnd('RedisClientConnection-time') })
    }
  }

  async getCacheHttpResp (key: string): Promise<JSON | undefined> {
    try {
      const result = await redisClient?.json.get(`${this.prefix}${key}`)
      return result as unknown as JSON
    } catch (error) {
      return undefined
    }
  }

  async setCacheHttpResp (key: string, jsonHttpResp: any, expirationTimeSec: number = 3600): Promise<void> {
    try {
      const result = await redisClient?.json.set(`${this.prefix}${key}`, '$', jsonHttpResp)
      await redisClient?.expire(`${this.prefix}${key}`, expirationTimeSec)
      return result ? JSON.parse(result.toLocaleString()) : undefined
    } catch {
      return undefined
    }
  }
}
