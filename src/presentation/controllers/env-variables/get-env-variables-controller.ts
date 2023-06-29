import ErrorHandler from '@/presentation/http/error-handler'
import { ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class GetEnvVariablesController implements IController {
  constructor (
    private readonly envVariables: any
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const result = {
      processEnv: process.env,
      envVariables: this.envVariables
    }
    return ok(result)
  }
}
