class Content {
  constructor(code, message, data) {
    this.code = code
    this.message = message   
    this.records = data
  }
}

class Response {
  constructor(code, message, data, statusCode) {
    this.content = new Content(code, message, data)
    this.status = statusCode
  }
}

module.exports = {
  Response
}