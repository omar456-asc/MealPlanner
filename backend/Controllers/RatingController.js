let RatingModel = require("../Models/RatingModel");

const addNewRate = async (req, res) => {
    var productID = req.params.id;
    const {  userID, value} = req.body;
   rating = await RatingModel.find({ productID: productID, userID: userID })
        console.log(rating);
        if (rating.length != 0) {
            var updatedRate = req.body;
            await RatingModel.updateOne({_id:rating[0]._id},{"value":updatedRate.value});
            console.log("updated");
            console.log(updatedRate.value);
            res.send(updatedRate);
            return;
            }
            
            try {
            await    RatingModel.create({
                      productID,
                      userID,
                      value,
                  });
                  console.log("created");
                  res.json({ status: "success" });
                } catch (e) {
                  res.status(400).json({ status: "failed" });
                }

        
    
  };
  module.exports = {
    addNewRate
  };