import { ISaveMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class PostMonitoriaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly saveMonitoria: ISaveMonitoria
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const toValidate = { ...httpRequest.body, ...httpRequest.body.indicadores }
    const error = this.validation.validate(toValidate)
    if (error) {
      return badRequest(error)
    }

    const result = await this.saveMonitoria.save(null)
    return result ? ok(result) : notFound()
  }
}
