import { IFindMotivoContato } from '@/domain/protocols/motivo-contato/motivo-contato-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetMotivoContatoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findMotivoContato: IFindMotivoContato
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.pathParams)
    if (error) {
      return badRequest(error)
    }

    const { motivoContatoId } = httpRequest.pathParams

    const result = await this.findMotivoContato.find({ motivoContatoId })
    return result ? ok(result) : notFound()
  }
}
