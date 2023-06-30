import { ISaveMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, created, notFound } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class PostMonitoriaController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly itensValidation: IValidation,
    private readonly saveMonitoria: ISaveMonitoria
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    const { indicadores } = httpRequest.body
    for (const item of indicadores) {
      const error = this.itensValidation.validate(item)
      if (error) {
        return badRequest(error)
      }
    }

    const result = await this.saveMonitoria.save(httpRequest.body)
    return result ? created(result) : notFound()
  }
}
