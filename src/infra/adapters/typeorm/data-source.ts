/* eslint-disable n/no-path-concat */
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const MySqlDataSource = new DataSource({
  type: 'mysql',
  host: 'auditoria-atendimento.clflhyx51ktz.us-east-1.rds.amazonaws.com',
  port: 3306,
  username: 'dbuseradmin',
  password: 'yZXGRWMqqA35KCUZDP0PIPSi6O0',
  database: 'dbo',
  logging: true,
  migrations: [`${process.env.STAGE === 'local' ? './.build' : './src'}/infra/adapters/typeorm/migrations/*.{js,ts}`]
})

MySqlDataSource.initialize().then(() => {}).catch((error) => { console.error('MySqlDataSource.initialize', error) })
