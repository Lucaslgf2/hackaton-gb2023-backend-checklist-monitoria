/* eslint-disable n/no-unpublished-require */
const log = require('./log')
const { SecretsLoader } = require('@grupoboticario/secrets-loader')

async function initSecrets() {
  if (!process.env.SECRETS_LOADED && process.env.SECRET_KEY) {
    const env = process.env.NODE_ENV
    if (['local', 'test'].includes(env)) {
      require('dotenv').config({ path: `.env.${env}` })
    } else {
      try {
        const secretsName = process.env.SECRET_KEY
        const secretsLoader = new SecretsLoader()
        await secretsLoader.loadSecrets([{ EnvVarName: 'ALL_ENV_VARS', SecretId: secretsName }])
      } catch (error) {
        log.error(`secrets NOT loaded: ${error.message}`)
        throw error
      }
    }
    process.env.SECRETS_LOADED = 'true'
  }
}

module.exports = {
  initSecrets
}
