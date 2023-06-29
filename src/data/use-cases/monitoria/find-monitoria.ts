import { IMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { IFindMonitoria, NsMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'

export class FindMonitoria implements IFindMonitoria {
  constructor (
    private readonly monitoriaRepo: IMonitoriaRepo
  ) {}

  async find (params: NsMonitoria.Input): Promise<NsMonitoria.Output> {
    const dbRows = await this.monitoriaRepo.select(params)
    return dbRows
  }
}
