'use strict'

const Common = require('./common')
const logger = require('./log')
const secrets = require('./secrets')

let common
/**
 * hold your single load here, just the syncronous stuff
 */
function onLambdaLoad() {
  common = new Common()
}
onLambdaLoad()

const handler = {
  /**
   * pdd sample handler wich returns a sample string.
   * @param {object} event
   * @returns string
   */
  async handler(event) {
    logger.info('Lambda started')
    await secrets.initSecrets()
    try {
      return common.handleResult({ message: 'Welcome to PDD!' })
    } catch (error) {
      return common.handleError(error)
    }
  }
}

module.exports = handler
