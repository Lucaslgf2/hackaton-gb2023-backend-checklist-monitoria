import { IAwsS3 } from '@/data/protocols/infra-adapters/aws-sdk/aws-s3-protocol'
import { AwsS3Adapter } from '@/infra/adapters/aws-sdk/aws-s3-adapter'
import { makeEnvVariables } from '@/main/config/envVariables'

export const makeAwsS3Adapter = (): IAwsS3 => {
  const envVariables = makeEnvVariables()
  return new AwsS3Adapter(envVariables.aws.region, envVariables.aws.accessKeyId, envVariables.aws.secretAccessKey, envVariables.aws.s3Bucket)
}
