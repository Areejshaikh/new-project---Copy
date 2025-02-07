'use client'
import Image from 'next/image';
import { HiStar } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import LeftSideData from "@/components/leftSideData";
import { Product } from '../../../utils/types';
import { products } from '../../../utils/mock';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export default function CategoryPage() {
    const [productslist, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    useEffect(() => {
        const getProducts = async () => {
            const data = await products();
            setProducts(data);
        };
        getProducts();
    }, []);

    // Pagination Logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productslist.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(productslist.length / productsPerPage);

    return (
        <>
            <section className="flex max-w-screen-xl gap-12 sm-gap-0 mx-auto my-24">
                <LeftSideData />
                <div className="container mx-auto overflow-x-hidden py-24 gap-6 grid grid-cols-1 md:grid-cols-3">
                    {/* Display Paginated Products */}
                    {currentProducts.map((product) => (
                        <div key={product._id} className="mx-8 md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6">
                            <div className="rounded-2xl w-[240px] h-[240px] group mb-4 object-cover object-center md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6">
                                <Link href={`/${product.category}/${product.slug.current}`}>
                                    <Image
                                        src={urlFor(product.imageUrl).url()}
                                        alt={product.name}
                                        width={140}
                                        height={94}
                                        className="rounded-2xl transition-all duration-300 group-hover:brightness-50 group-hover:shadow-lg group-hover:shadow-black w-[240px] h-[240px] mb-4 flex object-cover object-center md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6"
                                    />
                                </Link>
                            </div>
                            <div className="w-[140px] h-[94px] basis-1/2 sm:basis-1/4 md:basis-1/6">
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
                                    {/* Price and discount */}
                                     <div className=" h-[36px] text-center flex gap-4">
                                        <p className="text-base leading-6 font-medium text-maincolor  
                          
                                            line-through decoration-2 decoration-myred/70" >
                                                 {product.discountPercent}
 
                                            </p>
                                       
                                            <p className="text-base leading-6 font-medium text-maincolor">
                                                {product.price}
                                            </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pagination Component */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink href="#" onClick={() => setCurrentPage(index + 1)}>{index + 1}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
}


