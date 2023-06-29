import { BussinessError } from '@/domain/bussiness-errors/bussiness-error'
import loggerWinston from '@/main/adapters/winston-log/winston-log-adapter'
import { ServerError } from '@/presentation/errors'
import { badRequest, serverError } from '@/presentation/http/http-status'

export default function ErrorHandler (): any {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value
    descriptor.value = async function (...args: any[]) {
      try {
        return await fn.apply(this, args)
      } catch (error: any) {
        loggerWinston.error('errorHandler - ', error)
        if (error instanceof BussinessError) {
          return badRequest(error)
        }
        return serverError(new ServerError(error))
      }
    }
  }
}
