class Common {
  formatResponse(statusCode, body) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
    return { statusCode, headers, body: JSON.stringify(body) }
  }

  handleResult(result) {
    if (!result) {
      return this.formatResponse(204, { message: 'No Content' })
    }

    return this.formatResponse(200, result)
  }

  handleError = (err) => this.formatResponse(400, err)
}

module.exports = Common
