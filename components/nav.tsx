import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";

const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`slide-in-top z-50 bg-[#ffffff] py-4 px-5 sm:px-16 fixed top-0 justify-between flex w-full drop-shadow-lg ${
        showNavbar ? "block" : "hidden"
      }`}
    >
      {/* Navbar content */}
      <h1 className="font-nunito text-2xl sm:text-3xl font-extrabold tracking-widest">
        RUBIX
      </h1>

      <div className="hidden lg:flex font-montserrat items-center gap-9 text-base">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Shop</p>
        <p className="cursor-pointer">Collections</p>
        <p className="cursor-pointer">Blogs</p>
        <p className="cursor-pointer">Contact Us</p>
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

export default Nav;
