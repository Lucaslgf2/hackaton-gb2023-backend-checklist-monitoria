import { makeEnvVariables } from '@/main/config/envVariables'
import { GetEnvVariablesController } from '@/presentation/controllers/env-variables/get-env-variables-controller'
import { IController } from '@/presentation/protocols'

export const makeGetEnvVariablesController = (): IController => {
  const envVariables = makeEnvVariables()
  return new GetEnvVariablesController(envVariables)
}
