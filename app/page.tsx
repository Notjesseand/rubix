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
import BestSellerCarousel from "@/components/bestSellerCarousel";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "./blogs/page";

const Page = () => {
  const router = useRouter();

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
              onClick={() => router.push("/shop")}
            />
          </div>
          <div className="bg-[#484946]">
            <img
              onClick={() => router.push("/shop")}
              src="trending/banner2.webp"
              className="flex full w-full cursor-pointer hover:scale-95 transitin-all duration-300"
            />
          </div>
        </div>
        {/* chair banner */}
        <img
          onClick={() => router.push("/shop")}
          src="banner6.webp"
          className=" h-auto w-full mt-10 px-4 cursor-pointer hover:scale-95 transition-all duration-500"
        />
        {/* best seller products */}
        <div className="pt-10">
          <p className="text-center font-montserrat font-semibold text-3xl my-2 sm:my-4">
            Best Selling Products
          </p>
          <p className="text-center text-base sm:text-lg font-custom font-extralight text-gray-500">
            Top sale in this week
          </p>
          <div className="">
            <BestSellerCarousel />
          </div>
          {/* newsletter */}
          <div className="relative w-full mt-32 bg-fixed bg-[url(/newsletter-bg.jpg)] bg-cover md:bg-center">
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            <div className="relative flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] px-4">
              <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-10">
                <h2 className="text-center text-2xl sm:text-3xl font-bold font-custom text-gray-900">
                  Subscribe to Our Newsletter
                </h2>

                <p className="mt-3 text-center text-gray-600 font-montserrat text-sm sm:text-base">
                  Get weekly updates, exclusive offers, and eCommerce tips
                  straight to your inbox.
                </p>

                {/* Form */}
                <form className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address..."
                    className="flex-1 py-3 px-4 border-2 border-gray-200 rounded-lg text-gray-700 placeholder:text-gray-400 placeholder:font-montserrat focus:outline-none focus:border-[#ba933e] transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="py-3 px-6 rounded-lg bg-[#ba933e] text-white font-semibold hover:bg-[#a78435] transition-all duration-300 shadow-md active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-center mt-6 text-xs sm:text-sm text-gray-500 font-montserrat">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="bg-slate-50 px-4 sm:px-8 py-12 font-custom mt-10">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: (
                    <IoAirplaneOutline className="text-4xl sm:text-5xl text-[#ba933e]" />
                  ),
                  title: "Free Worldwide Shipping",
                  subtitle: "On all orders above $75.00",
                },
                {
                  icon: (
                    <TfiCreditCard className="text-4xl sm:text-5xl text-[#ba933e]" />
                  ),
                  title: "100% Secure Payment",
                  subtitle: "We secure payment with PEV",
                },
                {
                  icon: (
                    <HiOutlineReceiptRefund className="text-4xl sm:text-5xl text-[#ba933e]" />
                  ),
                  title: "30 Days Return",
                  subtitle: "Return it within 30 days for an exchange",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 py-10 px-6 flex flex-col items-center text-center"
                >
                  {/* Icon with circle background */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#f9f5ef] mb-6 group-hover:bg-[#ba933e]/10 transition-all duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                    {feature.title}
                  </h3>

                  <p className="font-montserrat text-sm text-gray-600 mt-2">
                    {feature.subtitle}
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-[#ba933e] hover:text-black text-sm font-medium transition-all duration-300">
                    Learn more <SlArrowRight className="text-base" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* From Our Blog Section */}
          <section className="mt-16 sm:mt-24 px-5 sm:px-10">
            <h2 className="font-bold font-montserrat text-3xl text-center">
              From Our Blog
            </h2>
            <p className="text-center mt-2 text-gray-600 font-montserrat text-sm sm:text-base">
              Read our curated library of blog posts
            </p>

            {/* Blog Grid */}
            <div className="grid gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Blog Image */}
                  <div className="relative w-full h-56 sm:h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>{post.author}</span>
                    </div>

                    <button className="bg-[#ba933e] text-white text-xs sm:text-sm px-3 py-1 rounded-full w-fit mb-3 capitalize font-semibold">
                      {post.tags[0]}
                    </button>

                    <h3 className="text-lg sm:text-xl font-bold font-montserrat mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 font-montserrat text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blogs/${post.id}`}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#ba933e] hover:text-black transition-all duration-200"
                    >
                      Read More <SlArrowRight className="text-base" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
