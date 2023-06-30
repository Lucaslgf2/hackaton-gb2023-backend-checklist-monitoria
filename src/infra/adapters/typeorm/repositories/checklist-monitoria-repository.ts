import { IMonitoriaRepo, NsMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { TypeORMConnection } from '@/infra/adapters/typeorm/typeorm-connection'

export class ChecklistMonitoriaRepository extends TypeORMConnection implements IMonitoriaRepo {
  async insert (params: NsMonitoriaRepo.Input): Promise<NsMonitoriaRepo.Output> {
    return undefined
  }
}
