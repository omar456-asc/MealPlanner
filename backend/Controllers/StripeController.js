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
        
    return  stripe.charges.create({
      amount: amount,
      currency: 'USD',
      customer: customer.id,
      description: "Order Payment Success"});
      
    }).then( charge=> {
       
    
        console.log(charge);
        res.status(200).send('Payment successful');
       
      }).catch(err => {
        
        
        console.error(err);
        res.status(500).send('Payment failed');
      
    });
}
module.exports ={
    payment
    
}