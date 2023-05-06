/**
 * Validation at Server-Side using ajv (another json schema Validators) [npm i ajv]
 * Routes [/....] methods [get-...] End Points
 * Utils [Separtion]
 * MVC[Model - View - Controller]
 * Authentication [Registration - Login] VS Autherization (Permission)[get|Post|Delete|Put]
 * Hash Passward 
 * JWT [Json Web Token] ==> [npm i jsonwebtoken] ==> Header
 */
const express = require("express");
const app = express();
const cors = require('cors');
// enable all CORS requests
app.use(cors());
const PORT = process.env.PORT || 7400;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
require("dotenv").config();


//Global MiddleWare
const logging = require("./MiddleWares/logging");
app.use("/", logging);

//#region user
const UserRoutes = require("./Routes/usersRoutes");
app.use("/api/users", UserRoutes);
//#endregion

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});

