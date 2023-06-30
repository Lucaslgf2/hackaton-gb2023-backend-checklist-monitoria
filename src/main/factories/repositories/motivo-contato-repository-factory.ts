import { MotivoContatoRepository } from '@/infra/adapters/typeorm/repositories/motivo-contato-repository'

export const makeMotivoContatoRepository = (): MotivoContatoRepository => {
  return new MotivoContatoRepository()
}
