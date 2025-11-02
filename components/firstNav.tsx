"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { PiHandbagLight } from "react-icons/pi";

const FirstNav = () => {
  const router = useRouter();
  const [cartCount, setCartCount] = useState<number>(0);

  // Read cart data from localStorage and calculate total quantity
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const cart = JSON.parse(storedCart);
        const total = cart.reduce(
          (count: number, item: any) => count + item.quantity,
          0
        );
        setCartCount(total);
      } else {
        setCartCount(0);
      }
    };

    // Initial load
    updateCartCount();

    // Listen for cart changes
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <div className="slide-in-top z-50 bg-[#ffffff] py-5 md:py-6 px-5 md:px-16 flex justify-between w-full drop-shadow-lg">
      {/* Logo */}
      <Link href="/">
        <h1 className="font-nunito text-3xl font-extrabold tracking-widest">
          RUBIX
        </h1>
      </Link>

      {/* Nav Links */}
      <div className="hidden lg:flex font-montserrat items-center gap-9">
        <Link href="/">
          <p className="cursor-pointer hover:text-[#ba933e]">Home</p>
        </Link>
        <Link href="/shop">
          <p className="cursor-pointer hover:text-[#ba933e]">Shop</p>
        </Link>
        <Link href="/collections">
          <p className="cursor-pointer hover:text-[#ba933e]">Collections</p>
        </Link>
        <p className="cursor-pointer hover:text-[#ba933e]">Blogs</p>
        <p className="cursor-pointer hover:text-[#ba933e]">Contact Us</p>
      </div>

      {/* Icons */}
      <div className="flex items-center text-2xl gap-3 relative">
        <Link href="/login">
          <BsPerson className="cursor-pointer" />
        </Link>

        <span className="h-6 w-[1.5px] bg-black"></span>

        <IoSearchOutline
          className="cursor-pointer"
          onClick={() => router.push("/shop?search=true")}
        />

        <span className="h-6 w-[1.5px] bg-black"></span>

        {/* 🛍 Cart with badge */}
        <div
          className="relative cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <PiHandbagLight className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-[#ba933e] text-white text-[10px] rounded-full h-5 w-5 aspect-square   flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
