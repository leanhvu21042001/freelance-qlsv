const convertToCustomError = require("../utils/error-converter.middleware");

function errorHandler(err, req, res, next) {
  const customError = convertToCustomError(err);

  if (customError.statusCode === 404) {
    // Handle 404 errors
    res.status(404).json({
      status: "error",
      message: "Not Found",
    });
  } else if (customError.isOperational) {
    // Handle other operational errors (e.g., validation errors)
    res.status(customError.statusCode).json({
      status: "error",
      message: customError.message,
    });
  } else {
    // Handle unexpected errors
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
}

module.exports = errorHandler;
