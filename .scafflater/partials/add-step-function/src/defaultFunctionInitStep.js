'use strict'

const Common = require('./common')
const logger = require('./log')

let common
/**
 * hold your single load here, like secrets.
 */
function onLambdaLoad() {
  common = new Common()
}
onLambdaLoad()

const handler = {
  /**
   * pdd sample handler wich returns a sample object.
   * @param {object} event
   * @returns string
   */
  async handler(event) {
    logger.info('Step Function started')
    try {
      return common.handleResult({ message: 'Step function success!', data: {event} })
    } catch (error) {
      return common.handleError(error)
    }
  }
}

module.exports = handler
