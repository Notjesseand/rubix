// "use client";
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { IoIosArrowForward } from "react-icons/io";
// import { motion } from "framer-motion";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import useOnScreen from "@/hooks/scroll";

// const Carousel = () => {
//   const [ref1, isvisible1] = useOnScreen({ threshold: 0.1 });
//   const [ref2, isvisible2] = useOnScreen({ threshold: 0.1 });
//   const [ref3, isvisible3] = useOnScreen({ threshold: 0.1 });
//   const [ref4, isvisible4] = useOnScreen({ threshold: 0.7 });
//   const [ref5, isvisible5] = useOnScreen({ threshold: 0.7 });
//   const [ref6, isvisible6] = useOnScreen({ threshold: 0.7 });
//   const [ref7, isvisible7] = useOnScreen({ threshold: 0.7 });
//   const [ref8, isvisible8] = useOnScreen({ threshold: 0.7 });
//   const [ref9, isvisible9] = useOnScreen({ threshold: 0.7 });

//   const variants = {
//     hidden: { opacity: 0, x: -250 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const variant2 = {
//     hidden: { opacity: 0, y: -150 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const pagination = {
//     clickable: true,

//     renderBullet: function (index: any, className: any) {
//       // Return a span with Tailwind classes for the bullet
//       return `
//     <div 
//       class="${className} w-10 h-10 rounded-full border-4 border-[#ba933e] bg-[#ba933e] mx-2 text-black  ${
//         className.includes("swiper-pagination-bullet-active")
//           ? "bg-transparent" // Active bullet has hollow circle
//           : "bg-[#ba933e]" // Inactive bullets have a filled circle
//       }">
//     </div>`;
//     },
//   };
//   return (
//     <Swiper
//       pagination={pagination}
//       navigation={{
//         nextEl: ".custom-next",
//         prevEl: ".custom-prev",
//       }}
//       loop={true}
//       autoplay={{ delay: 50000, disableOnInteraction: false }}
//       modules={[Pagination, Autoplay, Navigation]}
//       className="mySwiper"
//     >
//       <SwiperSlide className="">
//         <div className=" h-[44vh] md:h-[510px] bg-[url(/img-3.webp)] bg-cover bg-right md:bg-center flex flex-col justify-center px-24">
//           <div className="hidden md:flex flex-col justify-center w-full">
//             <motion.div
//               // @ts-ignore
//               ref={ref1}
//               initial="hidden"
//               animate={isvisible1 ? "visible" : "hidden"}
//               variants={variants}
//               transition={{ duration: 0.1, delay: 0.2 }}
//             >
//               <p
//                 className={`text-2xl font-bold font-montserrat  ${
//                   isvisible1 ? "bounce-right" : ""
//                 }`}
//               >
//                 Quick parcel delivery,{" "}
//                 <span className="text-[#ba933e]">from $25</span>
//               </p>
//             </motion.div>
//             <motion.div
//               // @ts-ignore
//               ref={ref2}
//               initial="hidden"
//               animate={isvisible2 ? "visible" : "hidden"}
//               variants={variants}
//               transition={{ duration: 0.1, delay: 0.5 }}
//             >
//               <p
//                 className={`text-5xl font-bold font-poppins lg:w-2/3 my-12 ${
//                   isvisible2 ? "bounce-right2" : ""
//                 }`}
//               >
//                 Normann Copenhagen-Craft salt and pepper grinder
//               </p>
//             </motion.div>
//             <motion.div
//               // @ts-ignore
//               ref={ref3}
//               initial="hidden"
//               animate={isvisible3 ? "visible" : "hidden"}
//               variants={variants}
//               transition={{ duration: 0.1, delay: 1 }}
//               // className="bounce-right"
//             >
//               <div>
//                 <button
//                   className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
//                     isvisible3 ? "shake-horizontal" : ""
//                   }`}
//                 >
//                   Start Shopping <IoIosArrowForward className="ml-2" />
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//         {/*  */}
//         <div className=" flex md:hidden flex-col justify-center w-full py-7 pb-12 z-50 px-10">
//           <motion.div
//             // @ts-ignore
//             ref={ref1}
//             initial="hidden"
//             animate={isvisible1 ? "visible" : "hidden"}
//             variants={variants}
//             transition={{ duration: 0.1, delay: 0.2 }}
//           >
//             <p
//               className={`text-xl font-bold font-montserrat  ${
//                 isvisible1 ? "bounce-right" : ""
//               }`}
//             >
//               Quick parcel delivery,{" "}
//               <span className="text-[#ba933e]">from $25</span>
//             </p>
//           </motion.div>
//           <motion.div
//             // @ts-ignore
//             ref={ref2}
//             initial="hidden"
//             animate={isvisible2 ? "visible" : "hidden"}
//             variants={variants}
//             transition={{ duration: 0.1, delay: 0.5 }}
//           >
//             <p
//               className={`text-2xl font-bold font-poppins lg:w-2/3 my-5 ${
//                 isvisible2 ? "bounce-right2" : ""
//               }`}
//             >
//               Normann Copenhagen-Craft salt and pepper grinder
//             </p>
//           </motion.div>
//           <motion.div
//             // @ts-ignore
//             ref={ref3}
//             initial="hidden"
//             animate={isvisible3 ? "visible" : "hidden"}
//             variants={variants}
//             transition={{ duration: 0.1, delay: 1 }}
//             // className="bounce-right"
//           >
//             {/* <div> */}
//             <button
//               className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
//                 isvisible3 ? "shake-horizontal" : ""
//               }`}
//             >
//               Start Shopping <IoIosArrowForward className="ml-2" />
//             </button>
//             {/* </div> */}
//           </motion.div>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide className="">
//         <div className="h-[510px] bg-[url(/img-1.webp)] bg-cover bg-center flex flex-col justify-center px-24">
//           <motion.div
//             // @ts-ignore
//             ref={ref4}
//             initial="hidden"
//             animate={isvisible4 ? "visible" : "hidden"}
//             variants={variants}
//             transition={{ duration: 0.1, delay: 0.7 }}
//           >
//             <p
//               className={`text-2xl font-bold font-montserrat bounce-left ${
//                 isvisible4 ? "bounce-right" : ""
//               } `}
//             >
//               Quick parcel delivery,{" "}
//               <span className="text-[#ba933e]">from $25</span>
//             </p>
//           </motion.div>

//           <motion.div
//             // @ts-ignore
//             ref={ref5}
//             initial="hidden"
//             animate={isvisible5 ? "visible" : "hidden"}
//             variants={variant2}
//             transition={{ duration: 0.1, delay: 0.5 }}
//           >
//             <p
//               className={`text-5xl font-extrabold font-poppins w-2/3 my-12 ${
//                 isvisible5 ? "bounce-top" : ""
//               }`}
//             >
//               Everyone&apos;s Talking About Sweeper and Funnel
//             </p>
//           </motion.div>

//           <motion.div
//             // @ts-ignore
//             ref={ref6}
//             initial="hidden"
//             animate={isvisible6 ? "visible" : "hidden"}
//             variants={variant2}
//             transition={{ duration: 0.1, delay: 0.1 }}
//           >
//             <div>
//               <button
//                 className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold bounce-left ${
//                   isvisible6 ? "bounce-top" : ""
//                 }`}
//               >
//                 Start Shopping <IoIosArrowForward className="ml-2" />
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </SwiperSlide>

//       <SwiperSlide className="">
//         <div className="h-[510px] bg-[url(/img-2.webp)] bg-cover bg-center flex flex-col justify-center px-24">
//           <motion.div
//             // @ts-ignore
//             ref={ref7}
//             initial="hidden"
//             animate={isvisible7 ? "visible" : "hidden"}
//             variants={variants}
//             transition={{ duration: 0.1, delay: 0.1 }}
//           >
//             <p
//               className={`text-2xl font-bold font-montserrat  ${
//                 isvisible7 ? "bounce-right" : ""
//               }`}
//             >
//               Quick parcel delivery,{" "}
//               <span className="text-[#ba933e]">from $25</span>
//             </p>
//           </motion.div>
//           <motion.div
//             // @ts-ignore
//             ref={ref8}
//             initial="hidden"
//             animate={isvisible8 ? "visible" : "hidden"}
//             variants={variants}
//             transition={{ duration: 0.1, delay: 0.5 }}
//           >
//             <p
//               className={`text-5xl font-bold font-poppins w-2/3 my-12 shake-horizontal ${
//                 isvisible8 ? "bounce-right2" : ""
//               }`}
//             >
//               Wood Minimal Office Chair <br /> Extra 40% off
//             </p>
//           </motion.div>
//           <motion.div
//             // @ts-ignore
//             ref={ref9}
//             initial="hidden"
//             animate={isvisible9 ? "visible" : "hidden"}
//             variants={variants}
//             transition={{ duration: 0.1, delay: 1 }}
//             // className="bounce-right"
//           >
//             <div>
//               <button
//                 className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
//                   isvisible9 ? "shake-horizontal" : ""
//                 }`}
//               >
//                 Start Shopping <IoIosArrowForward className="ml-2" />
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </SwiperSlide>
//       {/* Custom Navigation Buttons */}
//       <div className="custom-prev absolute left-7 border-2 border-[#ba933e] top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50">
//         <svg
//           className="w-7 h-7 text-black"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M15 19l-7-7 7-7"
//           ></path>
//         </svg>
//       </div>
//       <div className="custom-next absolute right-7 top-1/2 transform border-2 border-[#ba933e] -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50">
//         <svg
//           className="w-8 h-8"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 5l7 7-7 7"
//           ></path>
//         </svg>
//       </div>
//     </Swiper>
//   );
// };

// export default Carousel;


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

/**
 * Carousel component using Swiper for sliding hero sections.
 * Responsive design: different layouts for mobile (default) and larger screens (md+ = laptop/desktop).
 */
const Carousel = () => {
  // IntersectionObserver hooks to trigger animations when elements enter viewport
  const [ref1, isvisible1] = useOnScreen({ threshold: 0.1 });
  const [ref2, isvisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isvisible3] = useOnScreen({ threshold: 0.1 });
  const [ref4, isvisible4] = useOnScreen({ threshold: 0.7 });
  const [ref5, isvisible5] = useOnScreen({ threshold: 0.7 });
  const [ref6, isvisible6] = useOnScreen({ threshold: 0.7 });
  const [ref7, isvisible7] = useOnScreen({ threshold: 0.7 });
  const [ref8, isvisible8] = useOnScreen({ threshold: 0.7 });
  const [ref9, isvisible9] = useOnScreen({ threshold: 0.7 });

  // Animation variants for sliding in from left
  const variants = {
    hidden: { opacity: 0, x: -250 },
    visible: { opacity: 1, x: 0 },
  };

  // Animation variants for sliding in from top
  const variant2 = {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  };

  // Custom pagination bullets with Tailwind styling
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `
    <div 
      class="${className} w-10 h-10 rounded-full border-4 border-[#ba933e] bg-[#ba933e] mx-2 text-black  ${
        className.includes("swiper-pagination-bullet-active")
          ? "bg-transparent" // Active bullet has hollow circle
          : "bg-[#ba933e]" // Inactive bullets have a filled circle
      }">
    </div>`;
    },
  };

  return (
    // Main Swiper container with pagination, navigation, autoplay
    <Swiper
      pagination={pagination}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      loop={true}
      autoplay={{ delay: 50000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay, Navigation]}
      className="mySwiper"
    >
      {/* ==================== SLIDE 1 ==================== */}
      <SwiperSlide className="">
        {/* Background image container - responsive height */}
        {/* Mobile: h-[44vh], Laptop/Desktop: h-[510px] */}
        <div className=" h-[44vh] md:h-[510px] bg-[url(/img-3.webp)] bg-cover bg-right md:bg-center flex flex-col justify-center px-24">
          {/* ==================== LAPTOP/DESKTOP VERSION (md and up) ==================== */}
          <div className="hidden md:flex flex-col justify-center w-full">
            {/* Animated tagline - slides in from left */}
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

            {/* Main headline */}
            <motion.div
              // @ts-ignore
              ref={ref2}
              initial="hidden"
              animate={isvisible2 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <p
                className={`text-5xl font-bold font-poppins lg:w-2/3 my-12 ${
                  isvisible2 ? "bounce-right2" : ""
                }`}
              >
                Normann Copenhagen-Craft salt and pepper grinder
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              // @ts-ignore
              ref={ref3}
              initial="hidden"
              animate={isvisible3 ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.1, delay: 1 }}
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

        {/* ==================== MOBILE VERSION (below md) ==================== */}
        <div className=" flex md:hidden flex-col justify-center w-full py-7 pb-12 z-50 px-10">
          {/* Mobile tagline */}
          <motion.div
            // @ts-ignore
            ref={ref1}
            initial="hidden"
            animate={isvisible1 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            <p
              className={`text-xl font-bold font-montserrat  ${
                isvisible1 ? "bounce-right" : ""
              }`}
            >
              Quick parcel delivery,{" "}
              <span className="text-[#ba933e]">from $25</span>
            </p>
          </motion.div>

          {/* Mobile headline - smaller font */}
          <motion.div
            // @ts-ignore
            ref={ref2}
            initial="hidden"
            animate={isvisible2 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 0.5 }}
          >
            <p
              className={`text-2xl font-bold font-poppins lg:w-2/3 my-5 ${
                isvisible2 ? "bounce-right2" : ""
              }`}
            >
              Normann Copenhagen-Craft salt and pepper grinder
            </p>
          </motion.div>

          {/* Mobile CTA */}
          <motion.div
            // @ts-ignore
            ref={ref3}
            initial="hidden"
            animate={isvisible3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.1, delay: 1 }}
          >
            <button
              className={`bg-black text-white rounded px-12 py-3 flex items-center font-montserrat font-semibold ${
                isvisible3 ? "shake-horizontal" : ""
              }`}
            >
              Start Shopping <IoIosArrowForward className="ml-2" />
            </button>
          </motion.div>
        </div>
      </SwiperSlide>

      {/* ==================== SLIDE 2 ==================== */}
      <SwiperSlide className="">
        {/* Full-height fixed background for all screens (510px) */}
        <div className="h-[510px] bg-[url(/img-1.webp)] bg-cover bg-center flex flex-col justify-center px-24">
          {/* No separate mobile/laptop split here - same layout for all */}
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
      </SwiperSlide>

      {/* ==================== SLIDE 3 ==================== */}
      <SwiperSlide className="">
        {/* Fixed height background - same for mobile and laptop */}
        <div className="h-[510px] bg-[url(/img-2.webp)] bg-cover bg-center flex flex-col justify-center px-24">
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
      </SwiperSlide>

      {/* ==================== CUSTOM NAVIGATION BUTTONS (Visible on all screens) ==================== */}
      {/* Previous Button */}
      <div className="custom-prev absolute left-7 border-2 border-[#ba933e] top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50">
        <svg
          className="w-7 h-7 text-black"
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

      {/* Next Button */}
      <div className="custom-next absolute right-7 top-1/2 transform border-2 border-[#ba933e] -translate-y-1/2 bg-white text-black p-2 rounded-full cursor-pointer z-50">
        <svg
          className="w-8 h-8"
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