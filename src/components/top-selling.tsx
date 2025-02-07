'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { HiStar } from 'react-icons/hi2';
import { products } from '../../utils/mock';
import { Product } from '../../utils/types';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "./ui/button";
import { addToCart } from "@/app/actions/action";
import Swal from "sweetalert2";
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
    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
            e.preventDefault();
            addToCart(product)
            Swal.fire({
                position: "top-start",
                icon: "success",
                title: `${product.name} added to cart`,
                showConfirmButton: false,
                timer: 1500,
            })
    
        }

    return (
        <div className="w-full overflow-hidden max-w-screen-xl mx-auto bg-gray-100 mb-0 mt-24">
            <h2 className="text-center capitalize py-8 text-3xl md:text-[48px] text- font-bold leading-[48px] tracking-[4%]">
                Top Selling Items
            </h2>
            <Slider {...settings} className="gap-x-4">
                {productslist.slice(5, 12).map((product) => {
                    return (
                        <div key={product._id}
                            className="mx-auto max-w-screen-2xl ml-24 md:ml-0">


                            <div className=" rounded-2xl w-[240px] h-[240px] group mb-4 flex object-cover object-center  md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6">
                                <Link href={`/${product.category}/${product.slug.current}`} >
                                    {/* Display product image */}
                                    <Image
                                        src={urlFor(product.imageUrl).url()} // Generate URL for the product image
                                        alt={product.name}
                                        width={140}
                                        height={94}
                                        className=" rounded-2xl transition-all duration-300 group-hover:brightness-50 group-hover:shadow-lg group-hover:shadow-black w-[240px] h-[240px]  mb-4 flex object-cover object-center  md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6"
                                    />
                                </Link>
                            </div>
                            <div className="w-[140px] h-[250px]  md:ml-14 ml-0">
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
                                        <p className="text-base leading-6 font-medium text-maincolor  
                          
                                            line-through decoration-2 decoration-myred/70" >
                                                 {product.discountPercent}
 
                                            </p>
                                       
                                            <p className="text-base leading-6 font-medium text-maincolor">
                                                {product.price}
                                            </p>

                                    </div>
                                    <Button className="px-20 py-4 mx-auto items-center text-white text-center"
                                        onClick={(e) => handleAddToCart(e, product)}>
                                        Add To Cart

                                    </Button>


                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div  className="py-10  mx-auto items-center  text-center">
           <Link href={'/category'}>
                <Button>View All</Button>
            </Link>
           </div>
        </div>



    );
}
