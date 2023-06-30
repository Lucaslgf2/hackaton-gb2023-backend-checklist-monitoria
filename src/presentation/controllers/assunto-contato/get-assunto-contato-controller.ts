import { IFindAssuntoContato } from '@/domain/protocols/assunto-contato/assunto-contato-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetAssuntoContatoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findAssuntoContato: IFindAssuntoContato
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.queryParams)
    if (error) {
      return badRequest(error)
    }

    const { motivoSubContatoId } = httpRequest.queryParams

    const result = await this.findAssuntoContato.find({ motivoSubContatoId })
    return result ? ok(result) : notFound()
  }
}
