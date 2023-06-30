import { IMotivoContatoRepo, NsMotivoContatoRepo } from '@/data/protocols/motivo-contato/motivo-contato-repo-protocol'
import { TypeORMConnection } from '../typeorm-connection'

export class MotivoContatoRepository extends TypeORMConnection implements IMotivoContatoRepo {
  async select (params: NsMotivoContatoRepo.Input): Promise<NsMotivoContatoRepo.Output> {
    const querySql = 'SELECT 1 AS value'

    const sqlParams: any[] = [] // this.getSqlParamsObject(params)

    const resultDb = await this.executeQuery(querySql, sqlParams)
    if (resultDb?.length) {
      return []
    }
  }
}
