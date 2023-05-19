const dotenv = require("dotenv");
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


  
 var payment=(req, res) => {
    // customer=createCustomer("Sarsour")
    const { amount, name } = req.body;
    // Validate the payment information here
    
   const  customer=   stripe.customers.create({
      name: name,
      source: "tok_visa"
    }).then( customer => {
        if(customer.name){
    return  stripe.charges.create({
      amount: amount,
      currency: 'USD',
      customer: customer.id,
      description: "Order Payment Success"});
    }
     
      
    }).then( charge=> {
       
        if(charge){
        res.status(200).json('Payment successful');}
        else{
          res.status(400).json('please enter the card holder name');
        }
       
      }).catch(err => {
        
        console.error(err);
        res.status(400).json('Payment failed, please try again');
      
    });
}
module.exports ={
    payment
    
}