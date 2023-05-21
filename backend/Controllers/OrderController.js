const OrdersModel = require("../Models/OrdersModel");
let usersmodel = require("../Models/usersModel");
let ProductsModel = require("../Models/ProductsModel");
let IngredientModel = require("../Models/IngredientModel");

const { ObjectId } = require("mongodb");

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.aggregate([
      {
        $lookup: {
          from: "users", // Collection name for User model
          localField: "userID",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 1,
          totalPrice: 1,
          status: 1,
          date: 1,
          user: {
            fname: 1,
            lname: 1,
            email: 1,
          },
          mealCount: { $size: "$meals" },
        },
      },
    ]);

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get order by id
// const getOrderById = async (req, res) => {
//   var ID = req.params.id;
//   // console.log(ID);
//   // try {
//   let data = [];
//   const order = await OrdersModel.findOne({ _id: new ObjectId(ID) });
//   data.push({ order });

//   const user = await usersmodel.findOne({ _id: new ObjectId(order.userID) });
//   data.push({ user });

//   const meals = [];

//   for (const meal of order.meals) {
//     const mealDetails = await ProductsModel.findOne({
//       _id: new ObjectId(meal.mealID),
//     });

//     const ingredients = [];
//     for (const ingredientId of meal.ingredients) {
//       const ingredientDetails = await IngredientModel.findOne({
//         _id: new ObjectId(ingredientId),
//       });
//       ingredients.push(ingredientDetails);
//     }

//     mealDetails.ingredients = ingredients;
//     meals.push(mealDetails);
//   }

//   data.push({ meals });

//   console.log(meals);
//   if (!order) {
//     return res.status(404).json({ message: "Order not found" });
//   }
//   res.status(200).json(data);
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal server error" });
//   // }
// };

const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await OrdersModel.findOne({ _id: new ObjectId(orderId) });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const user = await usersmodel.findOne({ _id: new ObjectId(order.userID) });
    const meals = [];

    for (const meal of order.meals) {
      const mealDetails = await ProductsModel.findOne({
        _id: new ObjectId(meal.mealID),
      });

      if (Array.isArray(meal.ingredients)) {
        const ingredients = [];
        for (const ingredientId of meal.ingredients) {
          const ingredientDetails = await IngredientModel.findOne({
            _id: new ObjectId(ingredientId),
          });
          ingredients.push(ingredientDetails);
        }
        mealDetails.ingredients = ingredients;
      }

      meals.push(mealDetails);
    }

    const data = { order, user, meals };
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get order by user id

const getOrdersByUserId = async (req, res) => {
  try {
    const userID = req.params.id;
    const orders = await OrdersModel.find({ userID: new ObjectId(userID) });

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    const user = await usersmodel.findOne({ _id: new ObjectId(userID) });
    const ordersWithMeals = [];

    for (const order of orders) {
      const meals = [];

      for (const meal of order.meals) {
        const mealDetails = await ProductsModel.findOne({
          _id: new ObjectId(meal.mealID),
        });

        if (Array.isArray(meal.ingredients)) {
          const ingredients = [];
          for (const ingredientId of meal.ingredients) {
            const ingredientDetails = await IngredientModel.findOne({
              _id: new ObjectId(ingredientId),
            });
            ingredients.push(ingredientDetails);
          }
          mealDetails.ingredients = ingredients;
        }

        meals.push(mealDetails);
      }
      ordersWithMeals.push({ order, meals });
    }

    const data = { user, orders: ordersWithMeals };
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new order
const createOrder = async (req, res) => {
  try {
    const order = new OrdersModel(req.body);
    await order.save();
    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update an existing order
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await OrdersModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order status updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


// Delete an order
const deleteOrder = async (req, res) => {
  try {
    const order = await OrdersModel.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  deleteOrder,
  getOrdersByUserId,
};
