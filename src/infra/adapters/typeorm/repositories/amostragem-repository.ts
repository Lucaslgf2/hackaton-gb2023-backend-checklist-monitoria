import { IAmostragemRepo, NsAmostragemRepo } from '@/data/protocols/amostragem/amostragem-repo-protocol'
import { TypeORMConnection } from '../typeorm-connection'

export class AmostragemRepository extends TypeORMConnection implements IAmostragemRepo {
  async select (params: NsAmostragemRepo.Input): Promise<NsAmostragemRepo.Output> {
    const querySql = 'SELECT 1 AS value'

    const sqlParams: any[] = [] // this.getSqlParamsObject(params)

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return []
    }
  }
}
