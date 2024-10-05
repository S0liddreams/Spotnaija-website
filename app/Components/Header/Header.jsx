"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../Searchbar";
import { CiSearch } from "react-icons/ci";
import NavLinks from "./NavLinks";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-full h-[4rem]   flex items-center justify-between md:justify-normal p-4">
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
            className="md:hidden text-[25px]  w-fit flex justify-end z-10"
          >
            {!nav ? <IoMdMenu /> : <IoCloseSharp />}
          </div>
          <div className="w-full  h-full grid justify-center  md:hidden">
            <div
              className={
                !nav
                  ? "hidden "
                  : "absolute  left-0 cursor-pointer h-screen  mt-[5%] w-full bg-black md:bg-transparent  "
              }
            >
              <div className="mt-[20%] justify-center text-center text-green-700 text-[20px]">
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

      {/**Tablet screen search bar */}
      <div className="hidden md:flex md:justify-between md:w-full md:h-auto md:items-center ">
        <div className="hidden md:ml-6 md:flex md:items-center md:border md:border-gray-600 md:h-[30px] ">
          <CiSearch className=" hidden md:block md:text-[25px]" />
          <input type="search" className="hidden md:block " placeholder="search" />
        </div>
        <div className="hidden md:flex md:w-[50%]">
          <NavLinks />
        </div>
      </div>
      
        <button className=" hidden md: md:block md:bg-green-500 md:text-white md:pd-3 md:h-[30px] md:w-[100px] md:rounded-md">Sign Up</button>
        
    </div>
  );
};

export default Header;
