import { IFindAuditoria } from '@/domain/protocols/auditoria/auditoria-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetAuditoriaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findAuditoria: IFindAuditoria
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.queryParams)
    if (error) {
      return badRequest(error)
    }

    const result = await this.findAuditoria.find(null)
    return result ? ok(result) : notFound()
  }
}
