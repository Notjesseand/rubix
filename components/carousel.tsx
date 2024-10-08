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
import useOnScreen from "@/hooks/scroll";

const Carousel = () => {
  const [ref1, isvisible1] = useOnScreen({ threshold: 0.3 });
  const [ref2, isvisible2] = useOnScreen({ threshold: 0.3 });
  const [ref3, isvisible3] = useOnScreen({ threshold: 0.3 });
  const [ref4, isvisible4] = useOnScreen({ threshold: 0.5 });
  const [ref5, isvisible5] = useOnScreen({ threshold: 0.5 });
  const [ref6, isvisible6] = useOnScreen({ threshold: 0.5 });
  const [ref7, isvisible7] = useOnScreen({ threshold: 0.5 });
  const [ref8, isvisible8] = useOnScreen({ threshold: 0.5 });
  const [ref9, isvisible9] = useOnScreen({ threshold: 0.5 });
  // thresholds for mobile
  const [refm1, isvisiblem1] = useOnScreen({ threshold: 0.3 });
  const [refm2, isvisiblem2] = useOnScreen({ threshold: 0.3 });
  const [refm3, isvisiblem3] = useOnScreen({ threshold: 0.3 });
  const [refm4, isvisiblem4] = useOnScreen({ threshold: 0.3 });
  const [refm5, isvisiblem5] = useOnScreen({ threshold: 0.3 });
  const [refm6, isvisiblem6] = useOnScreen({ threshold: 0.3 });
  const [refm7, isvisiblem7] = useOnScreen({ threshold: 0.3 });
  const [refm8, isvisiblem8] = useOnScreen({ threshold: 0.3 });
  const [refm9, isvisiblem9] = useOnScreen({ threshold: 0.3 });

  const variants = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0 },
  };

  const variant2 = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };

  const pagination = {
    clickable: true,

    // renderBullet: function (index: any, className: any) {
    //   // Return a span with Tailwind classes for the bullet
    //   return `
    // <div
    //   class="${className} w-10 h-10 rounded-full border-4 border-[#ba933e] bg-[#ba933e] mx-2 text-black  ${
    //     className.includes("swiper-pagination-bullet-active")
    //       ? "bg-transparent" // Active bullet has hollow circle
    //       : "bg-[#ba933e]" // Inactive bullets have a filled circle
    //   }">
    // </div>`;
    // },
    renderBullet: function (index: any, className: any) {
      // Return a span with Tailwind classes for the bullet
      return `
        <div 
          class="${className} h-4 w-4 rounded-full border-4 border-[#ba933e] ${
        className.includes("swiper-pagination-bullet-active")
          ? "bg-transparent" // Active bullet has hollow circle
          : "" // Inactive bullet has hollow circle as well
      }">
        </div>`;
    },
  };
  return (
    <Swiper
      pagination={pagination}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="">
        <div className=" h-[44vh] md:h-[510px] bg-[url(/img-3.webp)] bg-cover bg-right md:bg-center flex flex-col justify-center px-24">
          <div className="hidden md:flex flex-col justify-center w-full">
            <motion.div
              // @ts-ignore
              ref={ref1}
              initial="hidden"
              animate={isvisible1 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <p
                className={`text-2xl font-bold font-montserrat  ${
                  isvisible1 ? "bounce-right" : ""
                }`}
              >
                Quick parcel delivery,{" "}
                <span className="text-[#ba933e]">from $25</span>
              </p>
            </motion.div>
            <motion.div
              // @ts-ignore
              ref={ref2}
              initial="hidden"
              animate={isvisible2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <p
                className={`text-5xl font-bold font-poppins w-2/3 my-12 ${
                  isvisible2 ? "bounce-right2" : ""
                }`}
              >
                Normann Copenhagen-Craft salt and pepper grinder
              </p>
            </motion.div>
            <motion.div
              // @ts-ignore
              ref={ref3}
              initial="hidden"
              animate={isvisible3 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 1 }}
              // className="bounce-right"
            >
              <div>
                <button
                  className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
                    isvisible3 ? "shake-horizontal" : ""
                  }`}
                >
                  Start Shopping <IoIosArrowForward className="ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* mobile */}
        <div className=" flex md:hidden flex-col justify-center w-full py-7 pb-12 z-50 px-10">
          <motion.div
            // @ts-ignore
            ref={refm1}
            initial="hidden"
            animate={isvisiblem1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            <p
              className={`text-lg font-bold font-montserrat  ${
                isvisiblem1 ? "bounce-right" : ""
              }`}
            >
              Quick parcel delivery,{" "}
              <span className="text-[#ba933e]">from $25</span>
            </p>
          </motion.div>
          <motion.div
            // @ts-ignore
            ref={refm2}
            initial="hidden"
            animate={isvisiblem2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            <p
              className={`text-xl font-bold font-poppins lg:w-2/3 my-5 ${
                isvisiblem2 ? "bounce-right2" : ""
              }`}
            >
              Normann Copenhagen-Craft salt and pepper grinder
            </p>
          </motion.div>
          <motion.div
            // @ts-ignore
            ref={refm3}
            initial="hidden"
            animate={isvisiblem3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 1 }}
            // className="bounce-right"
          >
            {/* <div> */}
            <button
              className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
                isvisiblem3 ? "shake-horizontal" : ""
              }`}
            >
              Start Shopping <IoIosArrowForward className="ml-2" />
            </button>
            {/* </div> */}
          </motion.div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="">
        <div className=" h-[44vh] md:h-[510px] bg-[url(/img-1.webp)] bg-cover bg-right md:bg-center flex flex-col justify-center px-24">
          <div className="hidden md:flex flex-col justify-center w-full">
            <motion.div
              // @ts-ignore
              ref={ref4}
              initial="hidden"
              animate={isvisible4 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 0.7 }}
            >
              <p
                className={`text-2xl font-bold font-montserrat bounce-left ${
                  isvisible4 ? "bounce-right" : ""
                } `}
              >
                Quick parcel delivery,{" "}
                <span className="text-[#ba933e]">from $25</span>
              </p>
            </motion.div>

            <motion.div
              // @ts-ignore
              ref={ref5}
              initial="hidden"
              animate={isvisible5 ? "visible" : "hidden"}
              variants={variant2}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <p
                className={`text-5xl font-extrabold font-poppins w-2/3 my-12 ${
                  isvisible5 ? "bounce-top" : ""
                }`}
              >
                Everyone&apos;s Talking About Sweeper and Funnel
              </p>
            </motion.div>

            <motion.div
              // @ts-ignore
              ref={ref6}
              initial="hidden"
              animate={isvisible6 ? "visible" : "hidden"}
              variants={variant2}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <div>
                <button
                  className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold bounce-left ${
                    isvisible6 ? "bounce-top" : ""
                  }`}
                >
                  Start Shopping <IoIosArrowForward className="ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* mobile */}
        <div className=" flex md:hidden flex-col justify-center w-full py-7 pb-12 z-50 px-10">
          <motion.div
            // @ts-ignore
            ref={refm4}
            initial="hidden"
            animate={isvisiblem4 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            <p
              className={`text-lg font-bold font-montserrat  ${
                isvisiblem4 ? "bounce-right" : ""
              }`}
            >
              Quick parcel delivery,{" "}
              <span className="text-[#ba933e]">from $25</span>
            </p>
          </motion.div>
          <motion.div
            // @ts-ignore
            ref={refm5}
            initial="hidden"
            animate={isvisiblem5 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            <p
              className={`text-xl font-bold font-poppins lg:w-2/3 my-5 ${
                isvisiblem5 ? "bounce-right2" : ""
              }`}
            >
              Everyone&apos;s Talking About Sweeper and Funnel
            </p>
          </motion.div>
          <motion.div
            // @ts-ignore
            ref={refm6}
            initial="hidden"
            animate={isvisiblem6 ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 0.1, delay: 1 }}
            // className="bounce-right"
          >
            {/* <div> */}
            <button
              className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
                isvisiblem6 ? "shake-horizontal" : ""
              }`}
            >
              Start Shopping <IoIosArrowForward className="ml-2" />
            </button>
            {/* </div> */}
          </motion.div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="">
        <div className=" h-[44vh] md:h-[510px] bg-[url(/img-2.webp)] bg-cover bg-right md:bg-center flex flex-col justify-center px-24">
          <div className="hidden md:flex flex-col justify-center w-full">
            <motion.div
              // @ts-ignore
              ref={ref7}
              initial="hidden"
              animate={isvisible7 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <p
                className={`text-2xl font-bold font-montserrat  ${
                  isvisible7 ? "bounce-right" : ""
                }`}
              >
                Quick parcel delivery,{" "}
                <span className="text-[#ba933e]">from $25</span>
              </p>
            </motion.div>
            <motion.div
              // @ts-ignore
              ref={ref8}
              initial="hidden"
              animate={isvisible8 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <p
                className={`text-5xl font-bold font-poppins w-2/3 my-12 shake-horizontal ${
                  isvisible8 ? "bounce-right2" : ""
                }`}
              >
                Wood Minimal Office Chair <br /> Extra 40% off
              </p>
            </motion.div>
            <motion.div
              // @ts-ignore
              ref={ref9}
              initial="hidden"
              animate={isvisible9 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 1 }}
              // className="bounce-right"
            >
              <div>
                <button
                  className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
                    isvisible9 ? "shake-horizontal" : ""
                  }`}
                >
                  Start Shopping <IoIosArrowForward className="ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* mobile */}
        <div className=" flex md:hidden flex-col justify-center w-full py-7 pb-12 z-50 px-10">
          <motion.div
            // @ts-ignore
            ref={refm7}
            initial="hidden"
            animate={isvisiblem7 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            <p
              className={`text-lg font-bold font-montserrat  ${
                isvisiblem7 ? "bounce-right" : ""
              }`}
            >
              Quick parcel delivery,{" "}
              <span className="text-[#ba933e]">from $25</span>
            </p>
          </motion.div>
          <motion.div
            // @ts-ignore
            ref={refm8}
            initial="hidden"
            animate={isvisiblem8 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            <p
              className={`text-xl font-bold font-poppins lg:w-2/3 my-5 ${
                isvisiblem8 ? "bounce-right2" : ""
              }`}
            >
              Everyone&apos;s Talking About Sweeper and Funnel
            </p>
          </motion.div>
          <motion.div
            // @ts-ignore
            ref={refm9}
            initial="hidden"
            animate={isvisiblem9 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 1 }}
            // className="bounce-right"
          >
            {/* <div> */}
            <button
              className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
                isvisiblem6 ? "shake-horizontal" : ""
              }`}
            >
              Start Shopping <IoIosArrowForward className="ml-2" />
            </button>
            {/* </div> */}
          </motion.div>
        </div>
      </SwiperSlide>

      {/* Custom Navigation Buttons */}
      <div className="custom-prev absolute left-3 sm:left-7 border-2 border-[#ba933e] top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
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
      <div className="custom-next absolute right-3 sm:right-7 top-1/2 transform border-2 border-[#ba933e] -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
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

export default Carousel;
