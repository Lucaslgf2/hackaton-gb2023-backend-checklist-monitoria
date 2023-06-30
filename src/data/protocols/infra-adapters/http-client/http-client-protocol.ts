export namespace NsHttpClient {
  export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete'

  export type Request = {
    method: Method
    url: string
    headers?: any
    pathParams?: any
    queryParams?: any
    body?: any
  }

  export type Response = {
    statusCode: number
    body?: any
  }
}

export interface IHttpClient {
  request: (httpClientRequest: NsHttpClient.Request) => Promise<NsHttpClient.Response>
}
