// import Image, { StaticImageData } from "next/image"
// import Link from "next/link"
// import { HiStar } from "react-icons/hi2"
// function ArrivalProps(
//   {
//     _id,
//     name,
//     description,
//     price,
//     discountPercentage,
//     priceWithoutDiscount,
//     rating,
//     ratingCount,
//     tags,
//     sizes,
//     category,
//     imageUrl,
//   }: {

import TopSelling from "./top-selling";

//     _id: string,
//     name: string,
//     description: string,
//     price: number,
//     discountPercentage: number,
//     priceWithoutDiscount: number,
//     rating: number,
//     ratingCount: number,
//     tags: any,
//     sizes: string[],
//     category: string,
//     imageUrl: string[] | string | StaticImageData | undefined | any,
//   }) {

//   return (
//     <div>
//       <div key={_id} className="mx-8 md:mx-auto grid col-span-3 basis-1/2 sm:basis-1/4 md:basis-1/6 my-8">

//         <Link href={`/${category}/${_id}`}>
//           <Image
//             className="border lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
//             src={imageUrl}
//             alt={name}
//             width={500}
//             height={500}
//           />
//         </Link>
//         {/* </Link> */}
//         <div className="w-[140px] h-[94px] ">
//           {/*Name  */}
//           <div className="w-[201px] h-[24px] my-2">
//             <p className="text-md text-black/90 leading-6 line-clamp-1 font-medium">{name}</p>
//           </div>
//           <div className="w-[201px] h-[24px] my-2">
//             <p className="text-base text-black/90 leading-6 line-clamp-1 font-medium">{description}</p>
//           </div>
//           {/* Price And Discount */}
//           <div className=" h-[36px] text-center flex gap-4">
//             <p className={`text-base leading-6 font-medium text-maincolor ${discountPercentage > 0 &&
//               "line-through decoration-2 decoration-myred/70"} `}>
//               ${price}
//             </p>
//             {discountPercentage > 0 && (
//               <p className="text-base leading-6 font-medium text-maincolor">
//                 ${price - (price * priceWithoutDiscount) / 100}
//               </p>
//             )}
//           </div>
//           {/* rating */}
//           <div className=" text-center justify-between flex">
//             <span className=" flex text-[#FFAD33]">
//               {[...Array(5)].map((_, i) => (
//                 <HiStar key={i} className="h-[20px]" />
//               ))}
//             </span>
//             <span>{rating} /5</span>
//             <span>{ratingCount}</span>
//           </div>
//           <div className=" text-center justify-between flex">
//             <span>{sizes}</span>
//           </div>
//           <span>{tags}</span>

//         </div>
//       </div>
//     </div>
//   )
// }


