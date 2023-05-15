let usersmodel = require("../Models/usersModel");
const { ObjectId } = require("mongodb");

var AddToCart = async(req, res)=>{
    try{
        var ID = req.params.id;
        var updatedCart = req.body;
       
        await usersmodel.updateOne({_id:ID},{"cart":updatedCart});
        await res.send(updatedCart);
    }catch(e){
        console.log(e);
        res.status(400).send('failed to add to cart');
    }
}

var GetCart = async (req, res) => {
  console.log("mmm");
    try {
      
        const userId = req.params.id;
      var UsersById = await usersmodel.aggregate([
    {
      $lookup: {
        from: "meals",
        localField: "cart",
        foreignField: "_id",
        as: "user_cart"
      },
      $match: { _id: new ObjectId(userId) }
    }
  ])
      await res.status(200).json(UsersById);
    } catch (e) {
      console.log(e);
      res.status(400).send("failed to get all meals");
    }
  }

module.exports = {
    AddToCart,
    GetCart
};
