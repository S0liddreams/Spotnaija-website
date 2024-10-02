"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../Searchbar";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-[4rem]  flex items-center justify-between">
      <div>
        <Image src="/Zangah.png" alt="placeholder" width={100} height={50} />
      </div>
      <div className="flex justify-end items-center md:hidden">
        <div className="h-full  flex items-center justify-center">
          <SearchBar />
        </div>
        <div>
        <div
          onClick={handleClick}
          className="md:hidden  w-fit flex justify-end z-10"
        >
          {!nav ? <IoMdMenu /> : <IoCloseSharp />}
        </div>
        <div className="w-full  h-full grid justify-center  md:hidden">
        <div
          className={
            !nav
              ? "hidden "
              : "absolute  left-0 cursor-pointer h-screen  mt-[8%] w-full bg-green-100 md:bg-transparent  "
          }
        >
          <div className="mt-[20%] justify-center text-center text-gray-900 text-[20px]">
            <p className=" p-4 m-2 ">
              <Link href="">Home</Link>
            </p>
            <p className=" p-4 m-2 ">
              <Link href="">About Us</Link>
            </p>
            <p className=" p-4 m-2 ">
              <Link href=""> Features</Link>
            </p>
            <p className=" p-4 m-2 ">
              <Link href=""> Write</Link>
            </p>
            
           
          </div>

          
        </div>
      </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
