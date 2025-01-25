'use client'
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import { CiShoppingTag } from "react-icons/ci";
import LeftSideCart from "@/components/leftSideCart";
import { useAppSelector } from "../store/hooks";

export default function CartPage() {

    const cartArray = useAppSelector((state) => state.cart)
    const total = cartArray.reduce((total: number, arr: any) => {
        return (total +( (arr.price - (arr.price * arr.discountPercent) / 100)) * arr.quantity);
    }, 0);


    const calculateTotalDiscount = (cartArray: { price: number; discountPercent: number; quantity: number }[]): number =>
        cartArray.reduce((total, item) => total + ((item.price * item.discountPercent) / 100) * item.quantity, 0);
    
    // // Example usage:
    const totalDiscount = calculateTotalDiscount(cartArray);
    // console.log(`Total discount received: $${totalDiscount.toFixed(2)}`);
    
    return (
        <section id="cart">
            <h2 className="pl-10 py-8 text-[48px] text- font-bold leading-[48px] tracking-[4%]">
                YOUR CART
            </h2>
            <div className="hidden text-gray-800 md:flex justify-left pl-12 text-center">
                <Link className="text-sm" href="/">Home</Link>
                <span className="px-4  text-xl">

                    <HiChevronRight /> </span>
                <Link className="text-sm" href="/">Card</Link>
            </div>
            <div className="md:flex justify-around max:w-sreen-lg md:space-x-4">

                <div >
                    <LeftSideCart/>                
                </div>
                <div className="my-12 md:w-[505px] md:h-[458px] w-[358px] h-[390px] mt-20 border border-gray-1 rounded-3xl py-2 px-4 md:space-y-8 ">
                    <span className="text-2xl font-bold  ">Order Summary</span>
                    <div className="md:w-[457px] md:h-[193px] w-[318px] h-[173px] space-y-4">
                        <div className="flex justify-between ">
                            <span className="text-gray-300">SubTotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="flex justify-between ">
                            <span className="text-gray-300">Discount ({totalDiscount})</span>
                            <span className="text">{totalDiscount}</span>
                        </div>
                        <div className="flex justify-between ">
                            <span className="text-gray-300">Delivery Free</span>
                            <span>$15</span>
                        </div>
                        <div className=" md:w-[420px] w-[230px] h-[1px] bg-gray-300"></div>
                        <div className="flex justify-between ">
                            <span className="">Total</span>
                            <span>${total}</span>
                        </div>

                    </div>
                    <div className="md:w-[457px] md:h-[48px] w-[318px] h-[48px]  flex justify-between mb-12">

                        < CiShoppingTag className="w-6 h-6   transform -translate-y-1/2 text-lg text-gray-700" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className={`rounded-full pl-6 w-full h-10 bg-gray-200 placeholder:text-sm text-[8px]`}
                        />
                        <button className="w-full md:w-38  inline-block text-center bg-black hover:bg-black/80 transition-all text-white py- rounded-full hover:animate-pulse">Apply</button>
                    </div>


                    <div className="md:w-[457px] md:h-[60px] w-[318px] h-[54px] ">
                        <div className="md:w-[457px] md:h-[48px] w-[318px] h-[48px]  flex justify-between">
                            <Link href={'/shipment'} className="w-full md:w-38  inline-block text-center bg-black hover:bg-black/80 transition-all text-white py- rounded-full hover:animate-pulse">Go to Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}