export class InvalidParamError extends Error {
  constructor (paramName: string, expectedValue?: string) {
    const msgExpectedValue = expectedValue ? ` (Valor esperado --> '${expectedValue}')` : ''
    super(`Parâmetro inválido: ${paramName}${msgExpectedValue}`)
    this.name = 'InvalidParamError'
  }
}
