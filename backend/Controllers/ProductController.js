let productsModel = require("../Models/ProductsModel");

var GetAllProducts = async (req, res) => {
  try {
    var AllProducts = await productsModel.aggregate([
  {
    $lookup: {
      from: "ingredients",
      localField: "ingredients",
      foreignField: "id",
      as: "ingredients_details"
    }
  }
])



    await res.status(200).json(AllProducts);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get all Products");
  }
};

module.exports = {
  GetAllProducts,
  //   GetUserByID,
  //   UpdateUserByID,
  //   DeleteUserByID,
};
