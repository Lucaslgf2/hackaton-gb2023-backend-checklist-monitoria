import { SubMotivoContatoRepository } from '@/infra/adapters/typeorm/repositories/sub-motivo-contato-repository'

export const makeSubMotivoContatoRepository = (): SubMotivoContatoRepository => {
  return new SubMotivoContatoRepository()
}
