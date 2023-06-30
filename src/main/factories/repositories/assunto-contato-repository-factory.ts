import { AssuntoContatoRepository } from '@/infra/adapters/typeorm/repositories/assunto-contato-repository'

export const makeAssuntoContatoRepository = (): AssuntoContatoRepository => {
  return new AssuntoContatoRepository()
}
