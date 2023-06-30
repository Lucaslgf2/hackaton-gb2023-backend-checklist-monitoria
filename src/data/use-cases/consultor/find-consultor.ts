import { IConsultorRepo } from '@/data/protocols/consultor/consultor-repo-protocol'
import { IFindConsultor, NsConsultor } from '@/domain/protocols/consultor/consultor-protocol'

export class FindConsultor implements IFindConsultor {
  constructor (
    private readonly consultorRepo: IConsultorRepo
  ) {}

  async find (params: NsConsultor.Input): Promise<NsConsultor.Output> {
    const dbRows = await this.consultorRepo.select(params)
    return dbRows?.map(item => {
      return {
        consultorId: item.CodigoConsultor,
        nomeConsultor: item.Nome,
        email: item.Email,
        vs: item.Vs,
        tempoCasa: item.TempoCasa,
        celulaAtendimento: item.CelulaAtendimento,
        supervisor: item.Supervisor
      }
    })
  }
}
