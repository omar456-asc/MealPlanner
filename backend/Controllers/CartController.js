const ProductsModel = require("../Models/ProductsModel");
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
    
      const userId = req.params.id;
      const user = await usersmodel.findOne({ _id: new ObjectId(userId) });

      if (user) {
        cart=[]
        meals=[]
        user.cart.forEach(element => {cart.push(element.id)
        });
        // meals= cart.forEach(element => { await ProductsModel.findOne({ _id: new ObjectId(element)});})
        for(let i=0; i<cart.length; i++) {
            meals.push(await ProductsModel.findOne({ _id: new ObjectId(cart[i])}))
        }
        res.json(meals)
      }   
  }

module.exports = {
    AddToCart,
    GetCart
};
