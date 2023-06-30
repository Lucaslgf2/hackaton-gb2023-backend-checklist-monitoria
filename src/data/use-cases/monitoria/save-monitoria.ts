import { IMonitoriaRepo } from '@/data/protocols/monitoria/monitoria-repo-protocol'
import { ISaveMonitoria, NsMonitoria } from '@/domain/protocols/monitoria/monitoria-protocol'

export class SaveMonitoria implements ISaveMonitoria {
  constructor (
    private readonly monitoriaRepo: IMonitoriaRepo
  ) {}

  async save (params: NsMonitoria.Input): Promise<NsMonitoria.Output> {
    const resultDb = await this.monitoriaRepo.insert(params)
    if (resultDb) {
      return { monitoriaId: resultDb.CodigoMonitoria }
    }
  }
}
