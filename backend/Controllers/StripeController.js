const dotenv = require("dotenv");
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
 var payment=(req, res) => {
    const { amount, source, description } = req.body;
  
    // Validate the payment information here
  
    stripe.charges.create({
      amount: amount,
      currency: 'USD',
      source: source,
      description: description
    }, (err, charge) => {
      if (err) {
        console.error(err);
        res.status(500).send('Payment failed');
      } else {
        console.log(charge);
        res.status(200).send('Payment successful');
      }
    });
}
module.exports ={
    payment
}