"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { PiHandbagLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

import { trending } from "@/api/data";
const jaja = "";
const TrendingCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `
        <div 
          class="${className} h-4 w-4 rounded-full border-4 border-[#ba933e] ${
        className.includes("swiper-pagination-bullet-active")
          ? "bg-transparent"
          : ""
      }">
        </div>`;
    },
  };

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Swiper
      pagination={pagination}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      loop={true}
      breakpoints={{
        // when window width is >= 768px
        308: {
          slidesPerView: 2,
        },
        720: {
          slidesPerView: 3,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
        },
      }}
      autoplay={{ delay: 5000000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      {trending.map((item, index) => (
        <SwiperSlide className=" pb-24" key={index}>
          <div className=" h-56 sm:h-80 md:h-96 w-5/6 mx-auto  relative cursor-pointer">
            <div
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundImage: `url(${
                  hovered === index ? item.image2 : item.image
                })`,
              }}
              className={`bg-contain hover:scale-95 h-full w-full flex transition-all duration-300 z-50 bg-no-repeat bg-center`}
            >
              <div className="absolute right-2 cursor-pointer top-5 -z-30">
                {/* add to cart */}
                <div className="h-10 w-10 sm:h-11 sm:w-11  rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold">
                  <PiHandbagLight />
                </div>
                {/* search */}
                <div className="h-10 w-10 sm:h-11 sm:w-11 mt-2 rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold">
                  <IoSearchOutline />
                </div>
              </div>
            </div>
            {/* item name */}
            <p className="font-semibold text-lg font-montserrat mt-2">
              {item.name}
            </p>
            <p className="mt-1 font-montserrat">${item.price}</p>
          </div>
        </SwiperSlide>
      ))}

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-3 sm:left-0 border-2 border-[#ba933e] top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
        <svg
          className=" w-6 h-6  sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </div>
      <div className="custom-next absolute right-3 sm:right-0 top-1/2 transform border-2 border-[#ba933e] -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
        <svg
          className="w-6 h-6  sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </Swiper>
  );
};

export default TrendingCarousel;
