/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const makeEnvVariables = () => {
  return {
    nodeEnv: process.env.NODE_ENV ?? 'local',
    environment: process.env.ENVIRONMENT ?? 'local',
    language: process.env.LANG,
    timezone: process.env.TZ,

    serverless: {
      vs: process.env.VS,
      stage: process.env.STAGE,
      memorySize: process.env.MEMORYSIZE,
      timeout: process.env.TIMEOUT,
      authorizerArn: process.env.AUTHORIZER_ARN,
      vpcSecurityGroupId: process.env.VPC_SECURITY_GROUP_ID,
      vpcSubnetId1: process.env.VPC_SUBNET_ID_1,
      vpcSubnetId2: process.env.VPC_SUBNET_ID_2
    },

    aws: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      accountId: process.env.AWS_ACCOUNT_ID,
      region: process.env.AWS_REGION ?? '',
      defaultRegion: process.env.AWS_DEFAULT_REGION,
      nodejsConnectionReuseEnabled: process.env.AWS_NODEJS_CONNECTION_REUSE_ENABLED,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
      sessionToken: process.env.AWS_SESSION_TOKEN,
      s3Bucket: process.env.S3_BUCKET ?? ''
    },

    newRelic: {
      accountId: process.env.NEW_RELIC_ACCOUNT_ID,
      apiKey: process.env.NEW_RELIC_API_KEY,
      trustedAccountKey: process.env.NEW_RELIC_TRUSTED_ACCOUNT_KEY,
      logLevel: process.env.NEW_RELIC_LOG_LEVEL
    },

    mySql: {
      host: process.env.RDS_CONN_ENDPOINT ?? '',
      port: process.env.RDS_CONN_PORT ? Number(process.env.RDS_CONN_PORT) : 3306,
      username: process.env.RDS_CONN_USERNAME ?? '',
      password: process.env.RDS_CONN_PASSWORD ?? '',
      database: 'dbo'
    },

    redisCache: {
      enabled: process.env.REDIS_CACHE_ENABLED === 'true',
      host: process.env.REDIS_CACHE_ENDPOINT ?? '',
      port: process.env.REDIS_CACHE_PORT ?? ''
    }

  }
}
