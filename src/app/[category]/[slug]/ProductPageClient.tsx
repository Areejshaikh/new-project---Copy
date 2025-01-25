'use client';
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";
import AddToCartTost from "@/components/AddToCartTost";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import SlugImages from "@/components/slugImage";
import { Product } from "@/app/utils/types";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/action/action";


// Props type for ProductPageClient
interface ProductPageClientProps {
    product: Product
}
// start main function
export default function ProductPageClient({ product }: ProductPageClientProps) {
    const dispatch = useAppDispatch()

    // cart inplementation 
    const [cartItems, setCartItem] = useState({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: urlFor(product.imageUrl).url(),
        color: product.color,
        size: product.sizes,
        description: product.description,
        discountPercent: product.discountPercent,
        category: product.category,
        slug: product.slug,
        new: product.new,
        rating: product.rating
    });

    return (
        <div className="grid sm-grid-cols-2 grid-cols-1 w-max-screen-2xl py-24 mx-auto">


            {/* LeftSide  Product Image */}
            <div className="mx-auto mt-6 w-[38rem] h-[32rem] ">
                <SlugImages image={[cartItems.image]} />
            </div>

            {/* RightSide Product Details */}
            <div className="w-[600px] ml-8">
                {/* Product name */}
                <h1 className="text-gray-900 text-4xl title-font font-extrabold leading-loose tracking-tighter mb-1">
                    {cartItems.name}
                </h1>

                {/* Product Rating */}
                <div className="text-center justify-between flex">
                    <span className="flex text-[#FFAD33]">
                        {[...Array(5)].map((_, i) => (
                            <HiStar key={i} className="h-[20px]" />
                        ))}

                        <span className="text-myBlack ml-2">{cartItems.rating}</span>
                    </span>
                </div>
                {/* product description */}
                <p className="leading-relaxed">
                    {cartItems.description}
                </p>
                {/* product price and dicount */}
                <div className=" h-[36px] text-center flex gap-4">
                    <p className={`text-base leading-6 font-medium text-maincolor  
                             ${cartItems.discountPercent > 0 &&
                        "line-through decoration-2 decoration-myred/70"} `} >
                        ${cartItems.price * cartItems.quantity}</p>

                    {/* discount */}
                    {cartItems.discountPercent > 0 && (
                        <p className="text-base leading-6 font-medium text-maincolor">
                            ${(cartItems.price - (cartItems.price * cartItems.discountPercent)
                                / 100) * cartItems.quantity}
                        </p>
                    )}
                </div>
                {/* Colors */}
                <div className=" mt-4 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <span className="mr-3">Select Color</span>
                    <div className="flex overflow-hidden z-10">
                        {cartItems.color && cartItems.color.length > 0 ? (
                            cartItems.color.map((colorItem: string, i: number) => (
                                <button
                                    key={i}
                                    onClick={() => setCartItem({ ...cartItems, color: [colorItem] })}
                                    className="m-2 border border-gray-400 rounded-full w-12 h-12 object-cover hover:scale-125 transform transition duration-500 ease-in-out focus:outline-none"
                                >
                                    {colorItem}
                                </button>
                            ))
                        ) : (
                            <p>No colors available</p>
                        )}

                        {/* {cartItems.color.map((colorItem) => ( */}
                        <button
                            // key={i}
                            onClick={() => setCartItem({ ...cartItems, color: [product] })}
                            className="m-2 border border-gray-400 rounded-full w-12 h-12  object-cover hover:scale-125 transform transition duration-500 ease-in-out focus:outline-none"
                        >
                            {product.color}
                        </button>
                        {/* // ))} */}




                    </div>
                </div>
                {/* size */}
                <span className="mr-3">Choose Size</span>
                <button onClick={(e) => setCartItem({ ...cartItems, size: [(e.target as HTMLSpanElement).innerText] })}
                    className="flex items-center cursor-pointer  mb-6">
                    {cartItems.size.map((items: any, i: number) => (
                        <span key={i} className=" py-2 px-6  hover:bg-black hover:text-white  rounded-full shadow-lg bg-white border-2 ">
                            {items}
                        </span>
                    ))
                    }
                </button>

                {/* Quantity and Add to Cart */}
                <div className="flex justify-between">
                    <div className="text-center flex bg-slate-200 justify-center w-[150px] h-[54px] items-center rounded-full">
                        <button
                            onClick={() => setCartItem({ ...cartItems, quantity: ++cartItems.quantity })
                            } className="hover:text-myred duration-600">
                            <FaPlus />
                        </button>
                        <span className="w-6 h-6 px-8">{cartItems.quantity}</span>
                        <button
                            onClick={() => setCartItem({ ...cartItems, quantity: cartItems.quantity <= 1 ? 1 : --cartItems.quantity, })}
                            className="hover:text-myred duration-600"
                        >
                            <FaMinus />
                        </button>

                    </div>

                    {/* Add to Cart Button */}

                    <div>
                        <AddToCartTost cartItem={cartItems} />
                    </div>
                </div>
            </div>
        </div>
    );
}
