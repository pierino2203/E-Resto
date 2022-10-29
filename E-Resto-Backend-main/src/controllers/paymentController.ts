import { RequestHandler } from "express";
const Stripe = require('stripe')(process.env.SECRET_STRIPE_KEY)



export const paymentStripe : RequestHandler = async (req, res) => {
    let status, error;
    const {token, amount} = req.body
    try {
        Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd'
        })
        status = 'success'
    } catch (error) {
        console.log(error)
        status = 'failure'
    }
    res.json({error, status})
    // console.log(token)
}
