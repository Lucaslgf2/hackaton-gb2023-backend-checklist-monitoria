export interface IRedisCache {
  getCacheHttpResp: (key: string) => Promise<JSON | undefined>
  setCacheHttpResp: (key: string, jsonHttpResp: JSON, expirationTimeSec?: number) => Promise<void>
}

export interface IRedisCacheEnvVariables {
  environment: string
  host: string
  port: number
  username: string
  password: string
}
