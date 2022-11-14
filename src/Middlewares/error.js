const handleError = (error, req, res, next) => {
  const { status, errorContent, message } = error;
  console.log("!->FAIL - SOMETHING WRONG<-!");
  res.status(status).json({
    message,
    error: errorContent.message,
  });
};

module.exports = handleError;