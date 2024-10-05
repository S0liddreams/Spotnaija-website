import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className="h-full w-full bg-black ">
      <div className="m-4 md:p-4">
        <div className="text-white flex flex-col md:flex-row md:justify-between md:items-center md:p-4 ">
          <p className="pt-4 pb-4 text-[16px] md:text-[20px]">
            Join #Zangah Volunteers&apos; Network
          </p>
          <button className="h-[40px] rounded-md w-[100px] bg-[#3AB300] text-white">
            Join Now
          </button>
        </div>

        <hr className="text-white bg-white mt-2" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="mt-[50px] h-[50px]">
              <Image src="/FooterLogo.png" alt="alt" width={100} height={50} />
            </div>
            <div className="flex gap-4 mt-[20px] text-[25px] items-center text-white">
              <div className="">
                <Link href={""}>
                  <RiFacebookBoxLine />
                </Link>
              </div>
              <div>
                <Link href={""}>X</Link>
              </div>
              <div>
                <Link href={""}>
                  <FaInstagram />
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <AiFillTikTok />
                </Link>
              </div>
              <div>
                <Link href={""}>
                  <FaSquareYoutube />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[50px] w-full ">
            <FooterLink className="" />
          </div>
        </div>

        <hr className="bg-white m-4" />

        <div className=" p-4 items-center w-full text-center">
          <h1 className="text-[16px ] text-white">
            {" "}
            ©2023 Zangah. All rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
