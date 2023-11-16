const CustomError = require("./custom-error.utils");

function convertToCustomError(err) {
  if (err instanceof CustomError) {
    return err; // If it's already a custom error, no need to convert
  }

  // Handle specific error types and convert them to CustomError
  if (err.name === "ValidationError") {
    return new CustomError("Validation error", 400);
  }

  // Add more conversions as needed
  if (err.code === "ER_DUP_ENTRY") {
    return new CustomError("Duplicate entry error", 409);
  }

  // If no specific conversion is matched, create a generic error
  return new CustomError("Internal Server Error", 500);
}

module.exports = convertToCustomError;
