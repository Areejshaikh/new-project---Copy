import { StaticImageData } from 'next/image'
export type Product = {
    _id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string[] | string | StaticImageData | undefined | any,
    // imageUrl?:{
    //     assets : {
    //         _ref: string;
    //         _type:"image";

    //     }}
    slug:{
        _type:"slug";
        current: "string";
          
    } ,
    category: string,
    discountPercent: number,
    new: boolean,
    color: string[] |string | undefined | any,
    sizes: string[],
    quantity:number,
    rating:number
}
export type cart = {
    _id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string[] | string | StaticImageData | undefined | any,
    category: string,
    discountPercent: number,
    new: boolean,
    color: string[] |string | undefined | any,
    sizes: string[],
    quantity:number,
    slug: string,
    uuid: string | undefined |number,
    rating:number

}

