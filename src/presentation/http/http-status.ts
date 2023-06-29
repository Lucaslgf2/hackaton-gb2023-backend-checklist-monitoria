import { ServerError, UnauthorizedError } from '@/presentation/errors/'
import { IHttpResponse } from '@/presentation/protocols/http'

export const ok = (data: any): IHttpResponse => ({
  headers: {},
  statusCode: 200,
  body: { data: data ?? {} }
})

export const created = (data: any): IHttpResponse => ({
  headers: {},
  statusCode: 201,
  body: { data: data ?? {} }
})

export const noContent = (): IHttpResponse => ({
  headers: {},
  statusCode: 204,
  body: undefined
})

export const badRequest = (error: Error): IHttpResponse => ({
  headers: {},
  statusCode: 400,
  body: { error }
})

export const unauthorized = (error: Error = new UnauthorizedError()): IHttpResponse => ({
  headers: {},
  statusCode: 401,
  body: { error }
})

export const notFound = (): IHttpResponse => ({
  headers: {},
  statusCode: 404,
  body: undefined
})

export const serverError = (serverError: ServerError): IHttpResponse => ({
  headers: {},
  statusCode: 500,
  body: { error: serverError }
})
