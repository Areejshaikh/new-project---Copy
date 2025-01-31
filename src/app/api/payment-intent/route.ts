
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)



export async function POST(request:NextRequest) {
  try {
    const { amount } = await request.json();
// front-ent sa data back-ent par jata h in lines k throw
    const paymentIntent = await stripe.paymentIntents.create({
      amount:amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });

  }catch (err:unknown) {
    if(err instanceof Error){
      return NextResponse.json({
        status: 500,
        body: {error : err.message},
      });

    }
   
  }

}
