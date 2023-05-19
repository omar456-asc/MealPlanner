const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const secret = process.env.SECRET_KEY;
const authMiddleware = (req, res, next) => {
  // console.log("bdfbhfgbhfgnhgfnfng");
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

// chat gpt middleware

// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     req.userData = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Authentication failed" });
//   }
// };

// // check current user
// const checkUser = (req, res, next) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     jwt.verify(token, secret, async (err, decodedToken) => {
//       if (err) {
//         res.locals.user = null;
//         next();
//       } else {
//         let user = await User.findById(decodedToken.id);
//         res.locals.user = user;
//         next();
//       }
//     });
//   } else {
//     res.locals.user = null;
//     next();
//   }
// };

// module.exports = { requireAuth, checkUser };

module.exports = authMiddleware;
