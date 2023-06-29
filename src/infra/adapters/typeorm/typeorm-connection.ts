import { makeEnvVariables } from '@/main/config/envVariables'
import { DataSource } from 'typeorm'

export abstract class TypeORMConnection {
  private readonly appDataSource: DataSource

  constructor () {
    const envVariables = makeEnvVariables()
    this.appDataSource = new DataSource({
      type: 'mysql',
      host: envVariables.mySql.host,
      port: envVariables.mySql.port,
      username: envVariables.mySql.username,
      password: envVariables.mySql.password,
      database: envVariables.mySql.database,
      multipleStatements: true,
      logging: true,
      cache: true
    })
  }

  protected async connect (): Promise<void> {
    if (!this.appDataSource.isInitialized) {
      await this.appDataSource.initialize()
    }
  }

  protected async executeQuery (querySql: string, params?: any[]): Promise<any[]> {
    await this.connect()
    const rows = await this.appDataSource.query(querySql, params)
    return rows
  }
}
