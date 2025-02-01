'use client'
import CheckOut from "@/components/checkout";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}


const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
)
const StripePage = ()  =>{
    const amount = 100.98
    return(
        <Elements 
        stripe={stripePromise}
        options={{
            mode: 'payment',
            amount: convertToSubcurrency(amount),
            currency: 'usd'
        }}>
            <CheckOut amount ={amount}/>
        </Elements>


    )

}
export default StripePage