import { IController, IHttpRequest, IHttpResponse, IMiddleware } from '@/presentation/protocols'
import { APIGatewayEvent, APIGatewayTokenAuthorizerEvent, Context } from 'aws-lambda'
import { middlewareComposite } from './serverless-route-middleware'
import { formatServerlessReqParams, formatServerlessResponse } from './serverless-route-utils'

export interface IHandlerEvent extends APIGatewayTokenAuthorizerEvent, APIGatewayEvent {}
export interface IHandlerContext extends Context {}

export const adaptServerlessRoute = (controller: IController, middlewares?: IMiddleware[]) => {
  return async (event: IHandlerEvent, context: IHandlerContext): Promise<IHttpResponse> => {
    const httpRequest: IHttpRequest = {
      headers: formatServerlessReqParams(event.headers ?? {}),
      pathParams: formatServerlessReqParams(event.pathParameters ?? {}),
      queryParams: formatServerlessReqParams(event.queryStringParameters ?? {}),
      body: event.body ? JSON.parse(event.body) : {}
    }

    const resultMidd = await middlewareComposite(httpRequest, middlewares)
    if (resultMidd) {
      return resultMidd
    }

    const httpResponse = await controller.handle(httpRequest)
    if (httpResponse.body) {
      if (event.path !== '/api-docs') {
        httpResponse.body = { isCache: false, ...httpResponse.body }
      }
    }

    // loggerWinston.info('event/context/httpRequest/httpResponse', { event, context, httpRequest, httpResponse })
    return formatServerlessResponse(httpResponse)
  }
}
