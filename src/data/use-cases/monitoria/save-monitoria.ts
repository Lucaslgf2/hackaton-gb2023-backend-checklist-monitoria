import { IMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { ISaveMonitoria, NsMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'

export class SaveMonitoria implements ISaveMonitoria {
  constructor (
    private readonly monitoriaRepo: IMonitoriaRepo
  ) {}

  async save (params: NsMonitoria.Input): Promise<NsMonitoria.Output> {
    const dbRows = await this.monitoriaRepo.select(params)
    return dbRows
  }
}
