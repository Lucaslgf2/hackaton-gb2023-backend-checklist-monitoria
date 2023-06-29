import { makeEnvVariables } from '@/main/config/envVariables'
import { makeRedisCacheAdapter } from '@/main/factories/adapters/redis-cache-adapter-factory'
import { IHttpResponse } from '@/presentation/protocols'
import { IHandlerContext, IHandlerEvent } from './serverless-route-adapter'
import { formatServerlessResponse } from './serverless-route-utils'

export const adaptRouteCache = (adaptRoute: (event: IHandlerEvent, context: IHandlerContext) => Promise<IHttpResponse>, expTimeSec?: number) => {
  return async (event: IHandlerEvent, context: IHandlerContext) => {
    const envVariables = makeEnvVariables()

    if (!envVariables.redisCache.enabled || !envVariables.redisCache.host) {
      return await adaptRoute(event, context)
    }

    const redisCacheAdapter = makeRedisCacheAdapter()

    let cacheKey = ''

    if (event.type !== 'TOKEN' && event.path !== '/access-level-permission') {
      const userLogin: string = event.requestContext?.authorizer?.pgiAuth ? JSON.parse(event.requestContext?.authorizer?.pgiAuth).userLogin : ''
      cacheKey = `${context.functionName}:${userLogin ?? ''}:${event.headers['cp-code'] ?? ''}:${event.headers['revenue-type'] ?? ''}:${event.headers['dash-view-name'] ?? ''}:${Object.keys(event.queryStringParameters ?? {}).join('_')}=${Object.values(event.queryStringParameters ?? {}).join('_')}`
    } else {
      const authToken = event.authorizationToken ?? event.headers?.Authorization ?? ''
      cacheKey = `${context.functionName}:${authToken.split(' ')[1]}`
    }

    console.time('RedisResult-time')
    const redisResult = await redisCacheAdapter.getCacheHttpResp(cacheKey)
    console.timeEnd('RedisResult-time')

    if (redisResult && !event.queryStringParameters?.download) {
      const result: any = redisResult

      if (!result.principalId) {
        return formatServerlessResponse({ headers: {}, statusCode: 200, body: { isCache: true, data: result } })
      }

      return formatServerlessResponse(result)
    } else {
      const httpResponse: any = await adaptRoute(event, context)
      let cacheData

      if (httpResponse.body) {
        cacheData = JSON.parse(httpResponse.body).data
      } else if (httpResponse.principalId && httpResponse.policyDocument?.Statement[0]?.Effect === 'Allow') {
        cacheData = httpResponse
      }

      await redisCacheAdapter.setCacheHttpResp(cacheKey, cacheData, expTimeSec)

      return httpResponse
    }
  }
}
