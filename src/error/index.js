class ApiError extends Error {
  constructor(message, statusCode, errors = null) {
    super(message);
    this.message = message;
    this.status = statusCode;
    this.errors = errors
  }
}

module.exports = ApiError;