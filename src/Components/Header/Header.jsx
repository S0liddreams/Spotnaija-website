import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Logo from "../../../public/Images/zangahLogo.png";

const Header = () => {
  return (
    <div className="w-full h-[4rem] bg-gray-300 flex justify-between items-center ">
      <div className="p-3">
        <img src={Logo} alt="" />
      </div>
      <div className="flex justify-between m-2">
        <div>
          <input type="search" className="hidden " />
          <CiSearch className="text-[25px] mr-2"  />
        </div>
        <div className="mr-2">
          <IoMdMenu className="text-[25px]"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
