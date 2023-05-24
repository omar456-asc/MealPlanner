let RatingModel = require("../Models/RatingModel");

const addNewRate = async (req, res) => {
    const { productID, userID, value} = req.body;
    
    try {
          await RatingModel.create({
                productID,
                userID,
                value,
            });
            res.json({ status: "success" });
          } catch (e) {
            res.status(400).json({ status: "failed" });
          }
  };
  module.exports = {
    addNewRate
  };