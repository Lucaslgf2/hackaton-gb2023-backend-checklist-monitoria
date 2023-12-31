import { IFindMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetMonitoriaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findMonitoria: IFindMonitoria
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.queryParams)
    if (error) {
      return badRequest(error)
    }

    const { monitoriaId } = httpRequest.pathParams

    const result = await this.findMonitoria.find({ monitoriaId })
    return result ? ok(result) : notFound()
  }
}
