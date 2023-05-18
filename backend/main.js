
/**
 * Utils [Separtion]
 * MVC[Model - View - Controller]
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
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//Global MiddleWare
const logging = require("./MiddleWares/logging");
app.use("/", logging);

//#region user
const UserRoutes = require("./Routes/usersRoutes");
app.use("/api/users", UserRoutes);
//#endregion

//#region Product
//#region product
const ProductRoutes = require("./Routes/productsRoutes");
app.use("/api/products", ProductRoutes);
//#endregion

//#region ingredients
const IngredientRoutes = require("./Routes/ingredientsRoutes");
app.use("/api/ingredients", IngredientRoutes);
//#endregion

//#region orders
const OrderRoutes = require("./Routes/ordersRoutes");
app.use("/api/orders", OrderRoutes);
//#region cart
const CartRoutes = require("./Routes/cartRoutes");
app.use("/api/cart", CartRoutes);
//#endregion

//#region cart
const stripeRoutes = require("./Routes/stripeRoutes");
app.use("/api/payment", stripeRoutes);
//#endregion


app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
