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
const cors = require("cors");
// enable all CORS requests
app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
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

//#region Product
const ProductRoutes = require("./Routes/productsRoutes");
app.use("/api/products", ProductRoutes);
//#endregion

//#region cart
const CartRoutes = require("./Routes/cartRoutes");
app.use("/api/cart", CartRoutes);
//#region ingredients
const IngredientRoutes = require("./Routes/ingredientsRoutes");
app.use("/api/ingredients", IngredientRoutes);
//#endregion

//#region orders
const OrderRoutes = require("./Routes/ordersRoutes");
app.use("/api/orders", OrderRoutes);
//#endregion

//#region order by user id
const userOrderRoutes = require("./Routes/userOrderRoutes");
app.use("/api/order", userOrderRoutes);
//#endregion

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
