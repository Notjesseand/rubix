import React from "react";
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";

const firstNav = () => {
  return (
    <div
      className={`slide-in-top z-50 bg-[#ffffff] py-5 md:py-7 px-5 md:px-16  justify-between flex w-full drop-shadow-lg`}
    >
      {/* Navbar content */}
      <h1 className="font-nunito text-3xl font-extrabold tracking-widest">
        RUBIX
      </h1>

      <div className="hidden lg:flex font-montserrat items-center gap-9">
        <p>Home</p>
        <p>Shop</p>
        <p>Collections</p>
        <p>Blogs</p>
        <p>Contact Us</p>
      </div>

      <div className="flex items-center text-2xl gap-3">
        <BsPerson className="cursor-pointer" />
        <span className="h-6 w-[1.5px] bg-black"></span>
        <IoSearchOutline className="cursor-pointer" />
        <span className="h-6 w-[1.5px] bg-black"></span>
        <PiHandbagLight className="cursor-pointer" />
      </div>
    </div>
  );
};

export default firstNav;
