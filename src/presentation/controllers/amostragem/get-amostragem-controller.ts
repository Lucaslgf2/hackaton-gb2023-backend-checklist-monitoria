import { IFindAmostragem } from '@/domain/protocols/amostragem/amostragem-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetAmostragemController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findAmostragem: IFindAmostragem
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.pathParams)
    if (error) {
      return badRequest(error)
    }

    const { amostragemId } = httpRequest.pathParams

    const result = await this.findAmostragem.find({ amostragemId })
    return result ? ok(result) : notFound()
  }
}
