import { AuditoriaRepository } from '@/infra/adapters/typeorm/repositories/auditoria-repository'

export const makeAuditoriaRepository = (): AuditoriaRepository => {
  return new AuditoriaRepository()
}
