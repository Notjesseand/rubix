"use client";

import { IoSearchOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number | string;
  image: string;
  imageAlt?: string;
  onAddToCart?: () => void;
  onView?: () => void;
}

export default function ProductCard({
  name,
  price,
  image,
  imageAlt,
  onAddToCart,
  onView,
}: ProductCardProps) {
  return (
    <div className="h-56 sm:h-80 md:h-96 w-5/6 mx-auto relative cursor-pointer group transition-all duration-300">
      {/* Image Container */}
      <div
        className="bg-contain bg-no-repeat bg-center h-full w-full flex transition-all duration-300 group-hover:scale-95"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Action Buttons */}
        <div className="absolute right-2 top-5 z-50 transition-opacity duration-300">
          {/* Add to Cart */}
          <div
            onClick={onAddToCart}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all"
          >
            <PiHandbagLight />
          </div>

          {/* Search / View */}
          <div
            onClick={onView}
            className="h-10 w-10 sm:h-11 sm:w-11 mt-2 rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all"
          >
            <IoSearchOutline />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-2 text-center">
        <p className="font-semibold text-lg font-montserrat">{name}</p>
        <p className="mt-1 font-montserrat">${price}</p>
      </div>
    </div>
  );
}
