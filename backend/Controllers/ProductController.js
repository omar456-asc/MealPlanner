let productsModel = require("../Models/ProductsModel");
const { ObjectId } = require("mongodb");

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


var GetProductByID = async (req, res) => {
  try {
    var ID = req.params.id;
    
   var product = await productsModel.aggregate([
     {
        $match: { _id: new ObjectId(ID) },
        // $match: { id: ID },
     },
     {
       $lookup: {
         from: "ingredients",
         localField: "ingredients",
         foreignField: "id",
         as: "ingredients_details",
       },
     },
   ]);
    res.json(product);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get Product");
  }
};

module.exports = {
    GetAllProducts,
    GetProductByID,
  //   UpdateUserByID,
    DeleteProductsByID,
};
