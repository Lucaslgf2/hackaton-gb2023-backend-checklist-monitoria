import { IFindSubMotivoContato } from '@/domain/protocols/sub-motivo-contato/sub-motivo-contato-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetSubMotivoContatoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findSubMotivoContato: IFindSubMotivoContato
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.queryParams)
    if (error) {
      return badRequest(error)
    }

    const result = await this.findSubMotivoContato.find(null)
    return result ? ok(result) : notFound()
  }
}
