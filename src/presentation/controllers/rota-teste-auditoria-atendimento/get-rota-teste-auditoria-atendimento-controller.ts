import { IFindRotaTesteAuditoriaAtendimento } from '@/domain/protocols/rota-teste-auditoria-atendimento/rota-teste-auditoria-atendimento-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetRotaTesteAuditoriaAtendimentoController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findRotaTesteAuditoriaAtendimento: IFindRotaTesteAuditoriaAtendimento
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.queryParams)
    if (error) {
      return badRequest(error)
    }

    const result = await this.findRotaTesteAuditoriaAtendimento.find(null)
    return result ? ok(result) : notFound()
  }
}
