import { IHttpRequest, IHttpResponse, IMiddleware } from '@/presentation/protocols'
import { formatServerlessResponse } from './serverless-route-utils'

export async function middlewareComposite (httpRequest: IHttpRequest, middlewares: IMiddleware[] = []): Promise<IHttpResponse | undefined> {
  for (const middleware of middlewares) {
    const httpResp = await middleware.handle(httpRequest)
    if (httpResp.statusCode !== 200) {
      return formatServerlessResponse(httpResp)
    }
  }
}
