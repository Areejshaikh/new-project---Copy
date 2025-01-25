// 'use client'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// // import { motion } from "motion/react";
// import { useAppSelector } from '@/app/store/hooks'
// import ArrivalProps from "./arrivalProps";
// import { useEffect, useState } from "react";
// import { products } from "@/app/utils/mock";
// import { Product } from '@/app/utils/types';

import TopSelling from "./top-selling";

// export default function Arrivals() {
//     const Product = useAppSelector((state) => state.product);
//     const [productslist, setProducts] = useState<Product[]>([]);
//     useEffect(() => {
//         const getProducts = async () => {
//             const data = await products();
//             setProducts(data);
//         };
//         getProducts();
//     }, []);
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 3,
//         responsive: [
//             {
//                 // When the screen width is 1024px or less
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3, // Show 3 slides
//                     slidesToScroll: 2, // Scroll 2 slides
//                 },
//             },
//             {
//                 // When the screen width is 768px or less
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2, // Show 2 slides
//                     slidesToScroll: 1, // Scroll 1 slide
//                 },
//             },
//             {
//                 // When the screen width is 480px or less
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1, // Show 1 slide
//                     slidesToScroll: 1, // Scroll 1 slide
//                 },
//             },
//         ],
//     };
//     return (
//         <div className="w-full max-w-screen-xl mx-auto mb-0">
//             <h2 className="text-center  py-8 text-[48px] font-bold leading-[48px] tracking-[4%]">
//                 New Arrivals
//             </h2>
//             <div>
//                 <Slider {...settings}>
//                     {
//                         productslist.slice(9,6).map((a: any) => ( // Correct parentheses and arrow function syntax
//                             <ArrivalProps
//                             key={a}
//                                 _id={a._id}
//                                 name={a.name}
//                                 description={a.description}
//                                 price={a.price}
//                                 discountPercentage={a.disc}
//                                 priceWithoutDiscount={a.priceWithoutDiscount}
//                                 rating={a.rating}
//                                 ratingCount={a.ratingCount}
//                                 tags={a.tags}
//                                 sizes={a.tags}
//                                 category={a.category}
//                                 imageUrl={a.imageUrl}
//                             />
//                         ))
//                     }
//                 </Slider>
//             </div>
//             {/* Button */}
//             <div className="py-10 items-center text-center">
//                 {/* <motion.button
//                     whileHover={{ scale: 1.2, backgroundColor: "#000000" }}
//                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                     className="px-14 py-4 rounded-full shadow-lg hover:text-white text-center w-full mx-4 md:w-52"
//                 >
//                     Click Me
//                 </motion.button> */}
//             </div>
//         </div>
//     );
// }



export default function ArrivalProps(){
    return(
      <TopSelling/>
    )
  }