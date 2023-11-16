class CustomError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode || 500;
    this.isOperational = true; // Indicates whether this is an operational error
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
