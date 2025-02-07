'use client'

import { NavigationMenuDemo } from "./navlinks";
import { VscThreeBars } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { BsCart3, BsPerson } from "react-icons/bs";
import Link from "next/link";
import { useAppSelector } from "@/app/store/hooks";

import { ComboboxDemo } from "./combobox";

const Navber = () => {
  const cart = useAppSelector((state) => state.cart) 
  return (
    <nav>
      <div className="fixed z-20 navbar bg-base-100 max-w-screen-xl right-0 left-0 top-0 mx-auto p-4 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button"
              className=" p-2 text-lg lg:hidden">
              <VscThreeBars className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-64  p-4 shadow">
              <li>
                <details>
                  <summary>Shop</summary>
                 <Link href="/sign-in">
                 <ul className="p-2">
                    <li><Link href='/woman'>woman &apos;s Cloths</Link></li>
                    <li><Link href='/man'>Man &apos;s Cloths</Link></li>
                    <li><Link href='/shoe'>Shoe And Bags</Link></li>
                    <li><Link href='/kid'>Kid &apos;s Clothes</Link></li>
                  </ul></Link>
                </details>
              </li>
              <li><Link href='/arival'>New Arrival</Link></li>
              <li><Link href='/onSale'>On Sale</Link></li>
              <li><Link href='/brands'>Brands</Link></li>
            </ul>
          </div>
          <Link href={'/'} className="md:text-2xl text-xl font-extrabold">Shop Co.</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavigationMenuDemo />
        </div>
         {/* Search Bar for Desktop */}
         <div className="hidden md:block relative w-[243px]">
          <ComboboxDemo/>
        </div>

        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle block md:hidden">
              <CiSearch className="h-6 w-6 block md:hidden" />
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
               <Link href='/login'> <BsPerson className="h-6 w-6" />
              
               </Link>
              </div>
            </button>
          <div className="flex-none">
            <Link href='/cart'>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <BsCart3  className="h-5 w-5 hover:text-myred:"/>
                </div>
              </div>
              </Link>
          </div>
        </div>

        
      </div>
    </nav>

  );
}
export default Navber;


