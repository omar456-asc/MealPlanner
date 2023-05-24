let productsModel = require("../Models/ProductsModel");
const productSchema = require("../Utils/ProductSchema");
const { ObjectId } = require("mongodb");

var SearchById = async (req, res) => {
  //console.log(req.params.key);
  try{
 // const searchQuery = req.query.key;
  let meals  = await productsModel.find(
    {
      '$or':[
       { title:{$regex: new RegExp(req.params.key),$options:'i'}},
       { category:{$regex: new RegExp(req.params.key),$options:'i'}}
     
      ]
    }
  )
 res.send(meals);
  }catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

var GetAllProducts = async (req, res) => {
  try {
    var AllProducts = await productsModel.aggregate([
      {
        $lookup: {
          from: "ingredients",
          localField: "ingredients",
          foreignField: "id",
          as: "ingredients_details",
        },
      },
    ]);

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
          foreignField: "_id",
          as: "ingredients_details",
        },
      },
    ]);
    product.ingredientLength=product[0].ingredients.length
     res.json(product);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get Product");
  }
};
var DeleteProductByID = async (req, res) => {
  try {
    var ID = req.params.id;
    await productsModel.findByIdAndDelete(ID);
    res.send("Deleted Successfully");
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to delete user");
  }
};

var getLatest6products = async (req, res) => {
  try {
    var AllProducts = await productsModel.find().sort({ _id: -1 }).limit(6);
    await res.json(AllProducts);
  } catch (e) {
    console.log(e);
    res.status(400).send("failed to get last 6 products");
  }
};

const addNewProduct = async (req, res) => {
  try {
    const { title, summary, image, ingredients, category } = req.body;
    // Validate the incoming product data against the schema
    const isValid = productSchema({
      title,
      summary,
      image,
      ingredients,
      category,
    });

    if (!isValid) {
      return res.status(400).json({ error: "Invalid product data" });
    }

    // Create a new product object
    const newProduct = new productsModel({
      title,
      summary,
      image,
      ingredients,
      category,
    });
    console.log(newProduct);

    // Save the new product object to the database
    await newProduct.save();

    return res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error !!!!" });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, summary, ingredients, image, category } = req.body;
    const product = await productsModel.findByIdAndUpdate(
      id,
      { title, summary, ingredients, image, category },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  GetAllProducts,
  GetProductByID,
  DeleteProductByID,
  getLatest6products,
  addNewProduct,
  DeleteProductByID,
  editProduct,
  SearchById
};
