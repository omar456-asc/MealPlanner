let usersmodel = require("../Models/usersModel");

var AddToCart = async(req, res)=>{
    try{
        var ID = req.params.id;
        var updatedCart = req.body;
       
        await usersmodel.updateOne({_id:ID},{"cart":updatedCart.cart});
        await res.send(updatedCart);
    }catch(e){
        console.log(e);
        res.status(400).send('failed to add to cart');
    }
}
module.exports = {
    AddToCart
};
