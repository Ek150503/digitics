// NOT FOUND
const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Class
class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Error handler
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode;
  res.status(statusCode);
  res.json({
    success: false,
    message: err.message,
    stack: err?.stack,
  });
};

module.exports = { errorHandler, notFound, CustomError };
