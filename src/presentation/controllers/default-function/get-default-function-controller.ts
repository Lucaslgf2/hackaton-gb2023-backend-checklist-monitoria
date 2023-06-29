import { IFindDefaultFunction } from '@/domain/protocols/default-function/default-function-protocol'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, notFound, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse, IValidation } from '@/presentation/protocols'

export class GetDefaultFunctionController implements IController {
  constructor (
    private readonly validation: IValidation,
    private readonly findDefaultFunction: IFindDefaultFunction
  ) {}

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const error = this.validation.validate(httpRequest.queryParams)
    if (error) {
      return badRequest(error)
    }

    const result = await this.findDefaultFunction.find()
    return result ? ok(result) : notFound()
  }
}
