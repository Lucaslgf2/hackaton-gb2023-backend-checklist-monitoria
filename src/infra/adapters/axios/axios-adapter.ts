import { IHttpClient, NsHttpClient } from '@/data/protocols/infra-adapters/http-client/http-client-protocol'
import axios from 'axios'

export class AxiosAdapter implements IHttpClient {
  async request (data: NsHttpClient.Request): Promise<NsHttpClient.Response> {
    try {
      const axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        headers: data.headers,
        data: data.body,
        params: data.queryParams
      })
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      }
    } catch (error: any) {
      if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND' || error.code === 'ETIMEDOUT' || error.code === 'ENOENT') {
        return { statusCode: 500, body: error.message }
      } else {
        return { statusCode: error.response?.status, body: error.response?.data }
      }
    }
  }
}
