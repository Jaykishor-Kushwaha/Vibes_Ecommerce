
const paypal = require("paypal-rest-sdk");

if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET || !process.env.PAYPAL_MODE) {
  console.error("PayPal environment variables are not configured correctly.");
  process.exit(1); 
}

paypal.configure({
  mode: process.env.PAYPAL_MODE, 
  client_id: process.env.PAYPAL_CLIENT_ID, 
  client_secret: process.env.PAYPAL_CLIENT_SECRET, 
});

module.exports = paypal;
