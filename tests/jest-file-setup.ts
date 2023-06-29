import { AxiosAdapter } from '@/infra/adapters/axios/axios-adapter'

console.log('Run jest-file-setup..\n')

export const axios = new AxiosAdapter()
export const slsOffPort = Number(process.env.PORT ?? 9003)
export const slsOffBaseUrl = `http://localhost:${slsOffPort}/test`
export const defaultHeaders = { 'x-api-key': 'd41d8cd98f00b204e9800998ecf8427e', 'cp-code': '33333', 'revenue-type': 'gross-revenue' }
