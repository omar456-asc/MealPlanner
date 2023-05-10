const errorHandler = (error, req, res, next) => {
  console.error(error);
  res.status(500).send({ error: "Something went wrong" });
};

module.exports = errorHandler;
