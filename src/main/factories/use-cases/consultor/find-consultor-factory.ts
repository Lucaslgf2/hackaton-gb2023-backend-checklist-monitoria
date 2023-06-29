import { FindConsultor } from '@/data/use-cases/consultor/find-consultor'
import { IFindConsultor } from '@/domain/protocols/consultor/consultor-protocol'
import { makeConsultorRepository } from '@/main/factories/repositories/consultor-repository-factory'

export const makeFindConsultor = (): IFindConsultor => {
  return new FindConsultor(makeConsultorRepository())
}
