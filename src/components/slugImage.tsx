'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface SlugImagesProps {
  image: string[] | StaticImageData[];
}

export default function SlugImages({ image }: SlugImagesProps) {
  const [path, setPath] = useState<string | StaticImageData>('');

  // Ensure `image` is an array
  if (!Array.isArray(image) || image.length === 0) {
    return <p className='' >No images available</p>;
  }

  return (
    <div className="flex gap-6">
      {/* Thumbnail Section */}
      <div className="flex flex-col gap-6">
        {image.map((item, i) => (
          <Image
            key={i}
            alt={`Thumbnail ${i + 1}`}
            className="w-[15rem] h-[14.1rem] my-4 rounded-3xl cursor-pointer"
            src={item}
            width={1000}
            height={1000}
            onClick={() => setPath(item)}
          />
        ))}
      </div>

      {/* Main Image Section */}
      <div className="overflow-hidden z-10 mx-auto">
        <Image
          alt="Main Product Image"
          src={path || image[0]}
          width={1000}
          height={1000}         
           className="w-96 h-[32rem] object-cover rounded-3xl hover:scale-125 transform transition duration-500 ease-in-out"

        />
      </div>
    </div>
  );
}




// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';
// import { urlFor } from '@/sanity/lib/image'; // Sanity ke image URL generator ka import

// interface SlugImagesProps {
//   image: any; // Sanity images ke liye dynamic type
// }

// export default function SlugImages({ image }: SlugImagesProps) {
//   const [path, setPath] = useState<string>('');

//   // Ensure `image` is a valid array
//   if (!Array.isArray(image) || image.length === 0) {
//     return <p className="">No images available</p>;
//   }

//   return (
//     <div className="flex gap-6">
//       {/* Thumbnail Section */}
//       <div className="flex flex-col gap-6">
//         {image.map((item, i) => (
//           <Image
//             key={i}
//             alt={`Thumbnail ${i + 1}`}
//             className="w-[12rem] h-[12rem] my-4 rounded-3xl cursor-pointer"
//             src={urlFor(item).url()} // Sanity image URL
//             width={1000}
//             height={1000}
//             onClick={() => setPath(urlFor(item).url())}
//           />
//         ))}
//       </div>

//       {/* Main Image Section */}
//       <div className="overflow-hidden z-10 mx-auto">
//         <Image
//           alt="Main Product Image"
//           src={path || urlFor(image[0]).url()} // Default to the first image
//           width={1900}
//           height={1800}
//           className="w-96 h-[32rem] object-cover rounded-3xl hover:scale-125 transform transition duration-500 ease-in-out"
//         />
//       </div>
//     </div>
//   );
// }
