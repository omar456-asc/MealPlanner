const OrdersModel = require("../models/OrdersModel");


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
const getOrderById = async (req, res) => {
  try {
    const order = await OrdersModel.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
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
const updateOrder = async (req, res) => {
  try {
    const order = await OrdersModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order updated successfully" });
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
  updateOrder,
  deleteOrder,
};
