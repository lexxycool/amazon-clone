const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HVSp6G2IrXDAKaxSSXDkefaqYxmX6IexmOdCuJdRz7Ws0duRtDlIIBNO7UDUVyaw87Pkrfd3A8YymiNoePGTzva00yO6RYEbL');

// API

// App config
const app = express();


// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.get('/obinna', (request, response) => response.status(200).send('loving the backend js'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment received for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
        }
    )
        response.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
})

// listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/challenge-806b4/us-central1/api
