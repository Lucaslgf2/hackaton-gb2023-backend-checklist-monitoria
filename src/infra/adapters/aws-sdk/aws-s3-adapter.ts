import { IAwsS3 } from '@/data/protocols/infra-adapters/aws-sdk/aws-s3-protocol'
import { GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export type IBuffer = Uint8Array | Buffer | any

export class AwsS3Adapter implements IAwsS3 {
  private readonly xlsExportedPath = 'exportedXlsFiles'

  constructor (
    private readonly region: string,
    private readonly accessKeyId: string,
    private readonly secretAccessKey: string,
    private readonly s3Bucket: string
  ) {}

  private getClient (): S3 {
    // return new S3({ region: this.region, credentials: { accessKeyId: this.accessKeyId, secretAccessKey: this.secretAccessKey } })
    return new S3({ region: this.region })
  }

  private async getAwsSignedUrl (fileName: string): Promise<string> {
    const s3Client = this.getClient()
    const command = new GetObjectCommand({
      Bucket: this.s3Bucket,
      Key: `${this.xlsExportedPath}/${fileName}`
    })
    return await getSignedUrl(s3Client, command, { expiresIn: 3600 })
  }

  async streamFileToS3 (buffer: IBuffer, fileName: string): Promise<string> {
    const s3Client = this.getClient()
    const command = new PutObjectCommand({
      Bucket: this.s3Bucket,
      Key: `${this.xlsExportedPath}/${fileName}`,
      Body: buffer
    })
    await s3Client.send(command)
    return this.getAwsSignedUrl(fileName)
  }
}
