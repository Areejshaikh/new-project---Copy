'use client'
import { addToCart } from '@/app/store/features/cart';
import { useAppDispatch } from '@/app/store/hooks';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
const AddToCartTost = ({ cartItem }: any) => {
    const dispatch = useAppDispatch();
    const notify = () => toast.success('Product Added Successfully', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <>
            <div onClick={() => dispatch(addToCart(cartItem))}>
                <button
                    onClick={notify}
                    className=" py-4 px-24 xl:px-24 rounded-full shadow-lg bg-black text-white
                   hover:text-black hover:bg-white duration-500 ">
                    Add To Cart
                </button>


            </div>
            <div>
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )

}


export default AddToCartTost