import { AmostragemRepository } from '@/infra/adapters/typeorm/repositories/amostragem-repository'

export const makeAmostragemRepository = (): AmostragemRepository => {
  return new AmostragemRepository()
}
