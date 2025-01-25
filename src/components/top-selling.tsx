'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { HiStar } from 'react-icons/hi2';
import { products } from '@/app/utils/mock';
import { Product } from '@/app/utils/types';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import { motion } from "motion/react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
export default function TopSelling() {
    const [productslist, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const getProducts = async () => {
            const data = await products();
            setProducts(data);
        };
        getProducts();
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                // When the screen width is 1024px or less
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // Show 3 slides
                    slidesToScroll: 2, // Scroll 2 slides
                },
            },
            {
                // When the screen width is 768px or less
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1, // Scroll 1 slide
                },
            },
            {
                // When the screen width is 480px or less
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1, // Scroll 1 slide
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto bg-gray-100 mb-0 mt-24">
            <h2 className="text-center capitalize py-8 text-[48px] text- font-bold leading-[48px] tracking-[4%]">
                Top Selling Items
            </h2>
            <Slider {...settings} className="gap-x-4">
                {productslist.slice(2, 8).map((product) => {
                    return (
                        <div key={product._id}
                            className="mx-auto max-w-screen-2xl">


                            <div className=" rounded-md w-[240px] h-[240px] group mb-4 flex object-cover object-center  md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6">
                                <Link href={`/${product.category}/${product.slug.current}`} >
                                    {/* Display product image */}
                                    <Image
                                        src={urlFor(product.imageUrl).url()} // Generate URL for the product image
                                        alt={product.name}
                                        width={140}
                                        height={94}
                                        className=" rounded-md transition-all duration-300 group-hover:brightness-50 group-hover:shadow-lg group-hover:shadow-black w-[240px] h-[240px]  mb-4 flex object-cover object-center  md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6"
                                    />
                                </Link>
                            </div>
                            <div className="w-[140px] h-[94px] ml-12">
                                <div className="w-[255px] h-[24px] my-4">
                                    <h1 className="text-sm line-clamp-2 leading-2 font-medium ">{product.name}</h1>
                                </div>
                                <div className="w-[140px] h-[84px] text-center justify-between space-y-3">
                                    <div className="flex">
                                        <span className="w-[100px] h-[20px] flex text-[#FFAD33]">
                                            <HiStar className="w-[20px] h-[20px]" />
                                            <HiStar className="w-[20px] h-[20px]" />
                                            <HiStar className="w-[20px] h-[20px]" />
                                            <HiStar className="w-[20px] h-[20px]" />
                                            <HiStar className="w-[20px] h-[20px]" />
                                        </span>
                                        <span className="w-[32px] h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
                                          {product.rating} 
                                        </span>
                                    </div>


                                    <div className=" h-[36px] text-center flex gap-4">
                                        <p className={`text-base leading-6 font-medium text-maincolor  
                             ${product.discountPercent > 0 &&
                                            "line-through decoration-2 decoration-myred/70"} `} >
                                            ${product.price * product.quantity}</p>
                                        {product.discountPercent > 0 && (
                                            <p className="text-base leading-6 font-medium text-maincolor">
                                                ${(product.price - (product.price * product.discountPercent) / 100) * product.quantity}
                                            </p>
                                        )}
                                     

                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div className="py-10  items-center text-center">
                <motion.button
                    whileHover={{ scale: 1.2, backgroundColor: "#000000" }} // Hover par effect
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="px-12 py-4 rounded-full text-white shadow-lg hover:text-white hover:bg-black  text-center w-auto mx-4 md:w-52"
                >
                    View All
                </motion.button>
            </div>
        </div>



    );
}
