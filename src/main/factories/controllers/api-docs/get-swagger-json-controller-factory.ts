import { GetSwaggerJsonController } from '@/presentation/controllers/api-docs/get-swagger-json-controller'
import { IController } from '@/presentation/protocols'

export const makeGetSwaggerJsonController = (): IController => {
  return new GetSwaggerJsonController()
}
