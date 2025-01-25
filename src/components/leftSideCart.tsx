'use client'

import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, deleteItem, lessCart } from "@/app/store/features/cart";
export default function LeftSideCart() {
    const cartArray = useAppSelector((state) => state.cart)
    console.log("abc:", cartArray)
    const dispatch = useAppDispatch()
    return (
        <>
            {
                cartArray.length >= 1 &&
                cartArray.map((item, i) => (
                    <div key={i} className="my-12 md:w-[700px]  w-[358px]  items-center border border-gray-1 rounded-3xl space-y-6 p-4 md:space-y-8">
                        <div className="md:w-[667px] md:h-[124px] w-[330px] h-[99px]  flex justify-between">
                            <div className="flex md:space-x-6 space-x-2">
                                {/* Iamge
                                 */}
                                <div>

                                    <Image
                                        src={item.imageUrl}
                                        alt="card pic"
                                        height={100}
                                        width={100}
                                        className="md:w-[124px] md:h-[124px] w-[99px] h-[99px] rounded-md" />
                                </div>
                                <div className="flex md:justify-between md:w-[527px] md:h-[124px]">
                                    <div className="md:w-[327px] md:h-[124px] w-[215px] h-[99px]  md:space-y-2 space-y-1">
                                        <h3 className="md:text-lg text-sm font-bold ">{item.name}</h3>
                                        <span className="text-gray-400">Size:{item.sizes}</span>
                                        <span className="text-gray-400">  
                                             {/* <button
                                            className="m-2 border border-gray-400 rounded-full w-12 h-12 object-cover hover:scale-125 transform transition duration-500 ease-in-out focus:outline-none"
                                        style={{ backgroundColor: item.color }}>
                                        </button> */}
                                        </span>
                                        {/* Price */}
                                        {/* discount */}
                                        <div className="flex items-center space-x-2">
                                            <p className={`text-base leading-6 font-medium text-maincolor  
                             ${item.discountPercent > 0 &&
                                                "line-through decoration-2 decoration-myred/70"} `} >
                                                ${item.price * item.quantity}</p>

                                            {/* price */}
                                            <span className="text-black font-bold text-xl mt-4">&nbsp;
                                                {item.discountPercent > 0 ? (item.price - ((item.price * item.discountPercent) / 100)) * item.quantity : item.price * item.quantity}

                                            </span>
                                        </div>
                                    </div>
                                    <div className="md:w-[225px] md:h-[124px] w-[115px] h-[99px] relative flex items-end justify-end">
                                        {/* <div className="absolute right-4 top-0 text-2xl text-red-500 cursor-pointer">
                                            < RiDeleteBin6Line onClick={() => dispatch(deleteItem(item.uuid))} />
                                        </div> */}
                                        <div className="absolute right-4 top-0 text-2xl text-red-500 cursor-pointer">
                                            < RiDeleteBin6Line onClick={() => dispatch(deleteItem(item.uuid))} />
                                        </div>
                                        <div className="absolute text-center flex bg-slate-200 justify-center w-[100px] md:w-[146px] h-[44px] items-center  rounded-full" >
                                            <button
                                               
                                                className="hover:text-myred duration-600">
                                                <FaPlus onClick={() => dispatch(addCart(item))} />
                                            </button>
                                            <span className="w-6 h-6 px-8">{item.quantity}</span>
                                            <button
                                                className="hover:text-myred duration-600">
                                                <FaMinus   onClick={() => dispatch(lessCart(item))}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ))
            }
        </>


    )
}