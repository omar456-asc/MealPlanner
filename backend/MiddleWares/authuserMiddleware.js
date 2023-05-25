const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

function authuserMiddleware(req, res, next) {
  // Get the token from the request header
  //   const token = req.headers["token"];
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send({ error: "Unauthorized access" });
  }

  try {
    // Verify the tokenand decode the user object
    const decoded = jwt.verify(token, secret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Unauthorized access" });
  }
}

module.exports = authuserMiddleware;
