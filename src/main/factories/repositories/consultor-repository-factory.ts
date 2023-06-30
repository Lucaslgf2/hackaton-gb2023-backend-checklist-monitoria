import { ConsultorRepository } from '@/infra/adapters/typeorm/repositories/consultor-repository'

export const makeConsultorRepository = (): ConsultorRepository => {
  return new ConsultorRepository()
}
