import { IBuffer } from '@/infra/adapters/aws-sdk/aws-s3-adapter'

export interface IAwsS3 {
  streamFileToS3: (buffer: IBuffer, fileName: string) => Promise<string>
}
