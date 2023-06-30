import { FindMonitoria } from '@/data/use-cases/monitoria/find-monitoria'
import { IFindMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'
import { makeMonitoriaRepository } from '@/main/factories/repositories/monitoria-repository-factory'

export const makeFindMonitoria = (): IFindMonitoria => {
  return new FindMonitoria(makeMonitoriaRepository())
}
