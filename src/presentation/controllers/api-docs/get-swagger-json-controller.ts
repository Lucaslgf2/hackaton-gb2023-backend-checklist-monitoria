import swaggerDocument from '@/main/swagger/swagger.json'
import ErrorHandler from '@/presentation/http/error-handler'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class GetSwaggerJsonController implements IController {
  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    return {
      headers: {},
      statusCode: 200,
      body: swaggerDocument
    }
  }
}
