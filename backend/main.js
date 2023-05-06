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
const PORT = process.env.PORT || 7400;
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
require("dotenv").config();

// /students ===> /api/students
// Students[CRUD] - Courses[CRUD] - Instructors[CRUD] - Departments[CRUD]

//Global MiddleWare
const logging = require("./MiddleWares/logging");
app.use("/", logging);

//Routing || Validators

//#region Student
const UserRoutes = require("./Routes/usersRoutes");
app.use("/api/users", UserRoutes);
//#endregion

//====================For Login===================

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});

///MVC [Model(Call DataBase) - View(Interact Wit User) - Controller(between Model&View)]
