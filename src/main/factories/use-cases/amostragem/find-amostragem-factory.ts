import { FindAmostragem } from '@/data/use-cases/amostragem/find-amostragem'
import { IFindAmostragem } from '@/domain/protocols/amostragem/amostragem-protocol'
import { makeAmostragemRepository } from '@/main/factories/repositories/amostragem-repository-factory'

export const makeFindAmostragem = (): IFindAmostragem => {
  return new FindAmostragem(makeAmostragemRepository())
}
