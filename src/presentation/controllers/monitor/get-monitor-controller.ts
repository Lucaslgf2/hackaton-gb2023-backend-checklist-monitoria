import { IFindMonitor } from '@/domain/protocols/monitor/monitor-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetMonitorController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findMonitor: IFindMonitor
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.queryParams)
    if (error) {
      return badRequest(error)
    }

    const { monitorId } = httpRequest.pathParams

    const result = await this.findMonitor.find({ monitorId })
    return result ? ok(result) : notFound()
  }
}
