import { makeEnvVariables } from '@/main/config/envVariables'
import { GetApiDocsController } from '@/presentation/controllers/api-docs/get-api-docs-controller'
import { IController } from '@/presentation/protocols'

export const makeGetApiDocsController = (): IController => {
  const envVariables = makeEnvVariables()
  return new GetApiDocsController(envVariables.environment)
}
