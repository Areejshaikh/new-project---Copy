import Link from "next/link"
import { Button } from "./ui/button"

interface IParams {
    searchParams: {
        amount: number
    }
}

const PaymentSuccess = ({ searchParams }: IParams) => {
    return (
      <>
        <div className="text-center w-full my-24">
            <h1 className="text-6xl">Thank you for purchasing $ {searchParams.amount}</h1>
      
        </div>
        <Link href={''} className="text-red-500"> 
        Check Shipment
        </Link>
      </>
    )
}

export default PaymentSuccess


// https://sultanoveli.medium.com/how-to-add-stripe-payments-to-your-next-js-app-d1cfced7c8a5
// https://github.com/jawwad-ali/Sunday-2PM-5PM/blob/main/stripe-payment/app/payment-success/page.tsx
// https://www.youtube.com/watch?v=vE1XHKp29nE