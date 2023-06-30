import 'tsconfig-paths/register' // Permite usar o alias @

import { startSlsOffline } from '@tests/main/serverless-offline-utils'

import dotenv from 'dotenv'
dotenv.config({ path: '.env.test' })

async function initJestGlobalSetup (): Promise<void> {
  console.log('Run jest-global-setup..\n')
  await startSlsOffline(Number(process.env.PORT))
}
export default initJestGlobalSetup
