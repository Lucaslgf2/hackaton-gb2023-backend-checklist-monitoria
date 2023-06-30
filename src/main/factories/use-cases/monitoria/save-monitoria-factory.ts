import { SaveMonitoria } from '@/data/use-cases/monitoria/save-monitoria'
import { ISaveMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'
import { makeMonitoriaRepository } from '@/main/factories/repositories/monitoria-repository-factory'

export const makeSaveMonitoria = (): ISaveMonitoria => {
  return new SaveMonitoria(makeMonitoriaRepository())
}
