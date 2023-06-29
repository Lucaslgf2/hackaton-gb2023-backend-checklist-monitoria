import { stopSlsOffline } from '@tests/main/serverless-offline-utils'

async function initJestGlobalTeardown (): Promise<void> {
  console.log('Run jest-global-teardown..\n')
  stopSlsOffline(Number(process.env.PORT))
}
export default initJestGlobalTeardown
