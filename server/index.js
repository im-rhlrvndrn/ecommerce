const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const stripe = require('stripe')('sk_test_ItPJORJh0cFQsiSobacXxuYr00ao62jhA9');

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payments/create/', async (req, res) => {
    const total = req.query.total;

    console.log('Payment received: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
