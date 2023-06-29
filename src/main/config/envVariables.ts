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

    bigQuery: {
      projectId: process.env.GCP_PROJECT_ID ?? '',
      credentials: process.env.GCP_CREDENTIALS ?? '{}',
      pgi: {
        tableReceitaDia: process.env.GCP_TABLE_PGI_RECEITA_DIA ?? '',
        tableReceitaCategoria: process.env.GCP_TABLE_PGI_RECEITA_CATEGORIA ?? '',
        tableReceitaConsultor: process.env.GCP_TABLE_PGI_RECEITA_CONSULTOR ?? '',
        tableReceitaSupervisor: process.env.GCP_TABLE_PGI_RECEITA_SUPERVISOR ?? ''
      },
      pgiAbsorcao: {
        tableReceita: process.env.GCP_TABLE_PGI_ABSORCAO_RECEITA ?? '',
        tableMaterial: process.env.GCP_TABLE_PGI_ABSORCAO_MATERIAL ?? '',
        tableCluster: process.env.GCP_TABLE_PGI_ABSORCAO_CLUSTER ?? ''
      },
      pgiBotiexpert: {
        tableDashConsultora: process.env.GCP_TABLE_PGI_BOTIEXPERT ?? ''
      },
      pgiLojaDigital: {
        tableReceptivoConsolidado: process.env.GCP_TABLE_PGI_LOJA_DIGITAL_RECEPTIVO_CONSOLIDADO ?? ''
      },
      pgiFidelidade: {
        tableVisaoFranqueado: process.env.GCP_TABLE_PGI_FIDELIDADE_VISAO_FRANQUEADO ?? '',
        tableVendasItens: process.env.GCP_TABLE_PGI_FIDELIDADE_VENDAS_ITENS ?? '',
        tableParticipantes: process.env.GCP_TABLE_PGI_FIDELIDADE_PARTICIPANTES ?? ''
      },
      pgiAcaoFluxo: {
        tableReceita: process.env.GCP_TABLE_PGI_ACAO_FLUXO_RECEITA ?? '',
        tableVoucher: process.env.GCP_TABLE_PGI_ACAO_FLUXO_VOUCHER ?? ''
      },
      pgiIaf: {
        tablePontuacao: process.env.GCP_TABLE_PGI_IAF_PONTUACAO ?? '',
        tablePunicao: process.env.GCP_TABLE_PGI_IAF_PUNICAO ?? '',
        tablePreviaResultados: process.env.GCP_TABLE_PGI_IAF_PREVIA_RESULTADOS ?? '',
        tableBussolaNotaIaf: process.env.GCP_TABLE_PGI_IAF_BUSSOLA_NOTAS ?? ''
      },
      pgiVendaDireta: {
        tableBase: process.env.GCP_TABLE_PGI_VD_BASE ?? '',
        tableSupervisor: process.env.GCP_TABLE_PGI_VD_BASE_SUPERVISOR ?? '',
        tableSegmentacao: process.env.GCP_TABLE_PGI_VD_SEGMENTACAO ?? ''
      },
      pgiMobshop: {
        tableReceita: process.env.GCP_TABLE_PGI_MOBSHOP_RECEITA ?? '',
        tableReceitaConsultor: process.env.GCP_TABLE_PGI_MOBSHOP_CONSULTOR ?? ''
      },
      pgiIdCliente: {
        tableCaptacaoVisitas: process.env.GCP_TABLE_PGI_CAPTACAO_VISITAS ?? ''
      },
      pgiCommon: {
        tableCiclos: process.env.GCP_TABLE_PGI_COMMON_CICLOS ?? ''
      }
    },

    redisCache: {
      enabled: process.env.REDIS_CACHE_ENABLED === 'true',
      host: process.env.REDIS_CACHE_ENDPOINT ?? '',
      port: process.env.REDIS_CACHE_PORT ?? ''
    },

    systemStatus: {
      endOfDbUpdate: process.env.SYSTEM_STATUS_END_OF_DB_UPDATE ?? '09:00'
    }

  }
}
