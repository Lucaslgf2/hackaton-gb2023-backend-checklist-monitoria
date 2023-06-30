import { DataSource } from 'typeorm'
import { MySqlDataSource } from './data-source'

export abstract class TypeORMConnection {
  private readonly appDataSource: DataSource

  constructor () {
    this.appDataSource = MySqlDataSource
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

  protected async executeInsert (querySql: string, params?: any[]): Promise<any> {
    await this.connect()
    const rows = await this.appDataSource.query(querySql, params)
    return rows
  }
}
