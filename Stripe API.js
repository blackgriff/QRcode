const stripe = require('stripe')('your_stripe_api_key');

app.post('/create-payment-intent', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 5000, // amount in cents
        currency: 'usd',
        payment_method_types: ['card']
    });
    res.send({ clientSecret: paymentIntent.client_secret });
});
