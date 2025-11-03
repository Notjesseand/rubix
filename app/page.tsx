// home page
"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/nav";
import FirstNav from "@/components/firstNav";
import { MdPhoneCallback } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Currency from "@/components/currency";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialPintarest } from "react-icons/sl";
import Carousel from "@/components/carousel";
import Loading from "@/components/loading";
import TrendingCarousel from "@/components/trendingCarousel";
import { trending } from "@/api/data";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { IoAirplaneOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { TfiCreditCard } from "react-icons/tfi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import Footer from "@/components/footer";
import Accordion from "@/components/ui/accordion";

const Page = () => {
  return (
    <div className="bg-[#f6f6f6] font-nunito transition-all duration-500 z-50">
      <Nav />
      <div className="py-2 bg-[#f5f5f5] xl:grid grid-cols-3 px-2 md:px-8 items-center justify-between text-sm">
        <div className="hidden xl:flex items-center ">
          <div className="flex items-center font-montserrat space-x-2 text-sm">
            <MdPhoneCallback className="flex" /> <p>+391 (0)35 2568 4593 </p>
          </div>
          <span className="h-4 w-[1.3px] bg-black mx-5 flex "></span>
          <div className="flex items-center gap-2">
            <AiOutlineMail />
            <p>jessennorom@gmail.com</p>
          </div>
        </div>

        <div className="bg-slate-100 text-center">
          Free shipping on all orders above{" "}
          <span className="underline"> $75 </span>{" "}
          <button className="ml-2 rounded bg-[#ba933e] text-white px-2 py-[1.5px] text-sm">
            Shop Now!
          </button>
        </div>
        <div className="bg-slate-100 hidden xl:flex justify-end ">
          <Currency />

          <div className="flex gap-3 items-center pl-4">
            <SlSocialFacebook />
            <TiSocialTwitter />
            <SlSocialInstagram />
            <SlSocialPintarest />
          </div>
        </div>
      </div>
      <FirstNav />
      <Carousel />
      {/*Trending Products  */}
      <div className="pt-14">
        <p className="text-2xl font-montserrat font-bold text-center">
          Trending Products
        </p>
        <p className="text-center font-montserrat mt-1 ">Top viewed</p>
        {/* trending products carusel */}
        <div className="p-2 sm:p-6">
          <TrendingCarousel />
        </div>
        {/* home decor and pendant lamp */}
        <div className="md:grid grid-cols-2 px-6 gap-10 space-y-3 md:space-y-0">
          <div className="  bg-[#eaeaea]">
            <img
              src="trending/banner1.webp"
              className="flex full w-full cursor-pointer hover:scale-95 transitin-all duration-300"
            />
          </div>
          <div className="bg-[#484946]">
            <img
              src="trending/banner2.webp"
              className="flex full w-full cursor-pointer hover:scale-95 transitin-all duration-300"
            />
          </div>
        </div>
        {/* chair banner */}
        <img
          src="banner6.webp"
          className=" h-auto w-full mt-10 px-4 cursor-pointer hover:scale-95 transition-all duration-500"
        />
        {/* best seller products */}
        <div className="pt-10">
          <p className="text-center font-montserrat font-semibold text-3xl my-2 sm:my-4">
            Best Seller Products
          </p>
          <p className="text-center text-base sm:text-lg font-custom font-extralight text-gray-500">
            Top sale in this week
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-12">
            {trending.map((item, index) => (
              <div
                key={index}
                className=" h-56 sm:h-80 md:h-96 w-5/6 mx-auto my-10 relative cursor-pointer"
              >
                <div
                  // onMouseEnter={() => setHovered(index)}
                  // onMouseLeave={() => setHovered(null)}
                  style={{
                    backgroundImage: `url(${item.image})`,
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
            ))}
          </div>
          {/* newsletter */}
          <div className="h-screen w-full bg-fixed bg-[url(/newsletter-bg.jpg)] mt-32 flex items-center bg-cover justify-center">
            <div className="w-11/12 sm:w-3/4 bg-white bg-opacity-85 py-14 rounded-sm pt-10 p-3">
              <p className="text-center text-[25px] font-bold font-custom pt-5">
                Subcribe To Our Newsletter
              </p>
              <p className="mt-3 font-montserrat text-center">
                Sign up for the weekly newsletter and build better ecommerce
                stores.
              </p>

              {/* form */}
              <div className="w-3/4 mx-auto sm:flex pt-12 gap-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email address..."
                  className="w-full py-2 sm:py-3 px-2 sm:px-4 border-[#e3e3e3] border-[2.5px] rounded-lg placeholder:font-montserrat outline-[#ba933e] font-montserrat"
                />
                <button className="px-10 rounded-lg bg-black text-white bg-opacity-75 flex sm:inline mx-auto">
                  Subscribe
                </button>
              </div>
              <p className="text-center mt-8 font-montserrat pb-5 text-sm">
                We respect your privacy, so we never share your info.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="grid md:grid-cols-3 gap-2 bg-slate-50 px-6 font-custom mt-10">
            <div className=" py-8 text-center justify-center bg-white">
              <IoAirplaneOutline className="text-5xl text-center flex mt-10 mx-auto" />
              <p className="mt-2 font-semibold text-base">
                Free Wordwide Shipping
              </p>
              <p className="font-montserrat mt-2 text-sm">
                On all orders above $75.00
              </p>
              <p className="mt-2 sm:mt-4 text-[15px] flex text-center justify-center items-center cursor-pointer">
                Learn more <SlArrowRight className="text-lg" />
              </p>
            </div>
            <div className="bg-white py-6 text-center justify-center ">
              <TfiCreditCard className="text-5xl text-center flex mt-10 mx-auto" />
              <p className="mt-2 font-semibold text-base">
                100% secure payment
              </p>
              <p className="font-montserrat mt-2 text-sm">
                We secure payment wth PEV
              </p>
              <p className="mt-2 sm:mt-4 text-[15px] flex text-center justify-center items-center cursor-pointer">
                Learn more <SlArrowRight className="text-lg" />
              </p>
            </div>
            <div className="bg-white py-6 text-center justify-center">
              <HiOutlineReceiptRefund className="text-5xl text-center flex mt-10 mx-auto" />
              <p className="mt-2 font-semibold text-base">30 Days Return</p>
              <p className="font-montserrat mt-2 text-sm">
                Return it within 20 day for an exchange
              </p>
              <p className="mt-2 sm:mt-4 text-[15px] flex text-center justify-center items-center cursor-pointer">
                Learn more <SlArrowRight className="text-lg" />
              </p>
            </div>
          </div>
          {/* From our Blogs */}
          <p className="pt-10 sm:pt-24 font-bold font-montserrat text-3xl text-center">
            From Our Blog
          </p>
          <p className="text-center mt-1 text-sm sm:mt-2 font-montserrat">
            Read our curated library of blogposts
          </p>

          <div className="grid lg:grid-cols-3 px-5 sm:px-10 pt-12 gap-2 lg:gap-x 4 gap-y-6">
            <div className="">
              <img
                src="/blog1.webp"
                alt="blog"
                className="w-full max-h-[60vh] object-cover"
              />
              <button className="bg-[#ba933e] px-2 py-0.5 rounded text-white capitalize text-sm md:text-base mt-4 font-bold font-montserrat">
                Lifestyle
              </button>
              <div className="">
                <p className="font-semibold text-[15px] mt-2">
                  Mr. Haalandd E.
                </p>{" "}
                <p className="text-lg font-bold mt-2">
                  {" "}
                  Top 5 Essential Tools for Front-End Developers in 2024
                </p>
                <p className="font-montserrat font-[450] text-sm mt-1">
                  Explore the most effective tools and frameworks for front-end
                  development, including popular options like React, Next.js,
                  and Tailwind CSS. Highlight why each tool is essential and how
                  it can streamline workflow.
                </p>
              </div>
              <button className=" px-5 py-2 border-[2.5px] text-sm flex gap-2 items-center mt-4 font-custom border-[#d1d1d1] rounded ">
                Read More <SlArrowRight />
              </button>
            </div>
            {/* blog 2 */}
            <div className="">
              <img src="/blog2.webp" alt="blog" className="w-full" />
              <button className="bg-[#ba933e] px-2 py-0.5 rounded text-white capitalize text-sm md:text-base mt-4 font-bold font-montserrat">
                Tech
              </button>
              <div className="">
                <p className="font-semibold text-[15px] mt-2">Mr. Jesse N.</p>{" "}
                <p className="text-lg font-bold mt-2">
                  How to Optimize Your Website for Better Performance: A
                  Developer&apos;s Guide
                </p>
                <p className="font-montserrat font-[450] text-sm mt-1">
                  Discuss key techniques to enhance website performance, such as
                  lazy loading, code splitting, and optimizing images. Provide
                  actionable tips for reducing load times and improving user
                  experience.
                </p>
              </div>
              <button className=" px-5 py-2 border-[2.5px] text-sm flex gap-2 items-center mt-4 font-custom border-[#d1d1d1] rounded ">
                Read More <SlArrowRight />
              </button>
            </div>
            {/* blog 3 */}
            <div className="">
              <img
                src="/blog3.webp"
                alt="blog"
                className="w-full max-h-[60vh] object-cover"
              />
              <button className="bg-[#ba933e] px-2 py-0.5 rounded text-white capitalize text-sm md:text-base mt-4 font-bold font-montserrat">
                Design
              </button>
              <div className="">
                <p className="font-semibold text-[15px] mt-2">Mr. Thugger</p>{" "}
                <p className="text-lg font-bold mt-2">
                  Mastering CSS Grid and Flexbox: A Beginner&apos;s Guide to
                  Modern Layouts
                </p>
                <p className="font-montserrat font-[450] text-sm mt-1">
                  Provide a comparison of CSS Grid and Flexbox, explaining when
                  and how to use each for modern web layouts. Include practical
                  examples and tips to help developers create responsive,
                  flexible designs.
                </p>
              </div>
              <button className=" px-5 py-2 border-[2.5px] text-sm flex gap-2 items-center mt-4 font-custom border-[#d1d1d1] rounded ">
                Read More <SlArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
