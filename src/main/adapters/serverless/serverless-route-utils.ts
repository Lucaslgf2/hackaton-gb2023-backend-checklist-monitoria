import { IHttpResponse } from '@/presentation/protocols'

export function formatServerlessResponse (httpResponse: IHttpResponse): IHttpResponse {
  if (!httpResponse.headers && !httpResponse.statusCode && !httpResponse.body) {
    return httpResponse
  } else {
    return {
      headers: { ...{ 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': true, 'Content-Type': 'application/json' }, ...httpResponse.headers },
      statusCode: httpResponse.statusCode,
      body: httpResponse.headers['Content-Type'] === 'text/html' ? httpResponse.body : httpResponse.body?.error ? JSON.stringify({ error: httpResponse.body.error.message }) : JSON.stringify(httpResponse.body)
    }
  }
}

export function formatServerlessReqParams (reqParams: any): object {
  function convertToTypes (item: any): any {
    if (!isNaN(item)) {
      return Number(item)
    }
    if (item === 'true' || item === 'false') {
      return (item === 'true')
    }
    if (item === 'null') {
      return null
    }
    if (item === 'undefined') {
      return undefined
    }
    return item.trim()
  }
  const keys = Object.keys(reqParams)
  for (const key of keys) {
    if (typeof reqParams[key] === 'string' && reqParams[key].indexOf(',') >= 0) {
      reqParams[key] = reqParams[key].split(',').map((item: any) => {
        return convertToTypes(item)
      })
    } else {
      if (['cps', 'pdvs', 'channels', 'bUnits', 'consultants', 'cities', 'ufs', 'pillars'].includes(key)) {
        reqParams[key] = [convertToTypes(reqParams[key].trim())]
      } else {
        reqParams[key] = convertToTypes(reqParams[key].trim())
      }
    }
  }
  return reqParams
}
