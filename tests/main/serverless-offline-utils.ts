import { exec } from 'child_process'
import waitPort from 'wait-port'

export async function startSlsOffline (httpPort: number): Promise<void> {
  exec(`serverless offline start --noTimeout --httpPort=${httpPort} --stage test`)
  await waitPort({ host: 'localhost', port: httpPort })
}

export function stopSlsOffline (httpPort: number): void {
  exec(`kill $(lsof -t -i:${httpPort})`)
}
