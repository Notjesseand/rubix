"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "@/components/productCard";
import { toast } from "sonner";

const BestSellerCarousel = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [products2, setProducts2] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products/category/home-decoration"
        );
        const res2 = await fetch(
          "https://dummyjson.com/products/category/laptops"
        );
        const data = await res.json();
        const data2 = await res2.json();
        setProducts(data.products || []);
        setProducts2(data2.products || []);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  const handleAddToCart = (product: any) => {
    const stored = localStorage.getItem("cart");
    let cart = stored ? JSON.parse(stored) : [];

    const existing = cart.find((i: any) => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    toast.success(`${product.title} added to cart`);
  };

  if (loading)
    return (
      <div className="flex justify-center py-10">
        <p className="text-gray-500">Loading trending products...</p>
      </div>
    );

  if (!products.length)
    return (
      <div className="flex justify-center py-10">
        <p className="text-gray-500">No trending products found.</p>
      </div>
    );

  return (
    <div className="relative">
      <Swiper
        pagination={pagination}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        breakpoints={{
          308: { slidesPerView: 2 },
          720: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className="pb-24">
            <ProductCard
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.thumbnail}
              onAddToCart={() => handleAddToCart(item)}
            />
          </SwiperSlide>
        ))}

        {/* Navigation arrows */}
        <div className="custom-prev absolute left-3 sm:left-0 border-2 border-[#ba933e] top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
          <svg
            className="w-4 h-4 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="custom-next absolute right-3 sm:right-0 top-1/2 transform border-2 border-[#ba933e] -translate-y-1/2 bg-white text-black p-1 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
          <svg
            className="w-4 h-4 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Swiper>

      <Swiper
        pagination={pagination}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        breakpoints={{
          308: { slidesPerView: 2 },
          720: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {products2.map((item, index) => (
          <SwiperSlide key={index} className="pb-24">
            <ProductCard
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.thumbnail}
              onAddToCart={() => handleAddToCart(item)}
            />
          </SwiperSlide>
        ))}

        {/* Navigation arrows */}
        <div className="custom-prev absolute left-3 sm:left-0 border-2 border-[#ba933e] top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
          <svg
            className="w-4 h-4 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="custom-next absolute right-3 sm:right-0 top-1/2 transform border-2 border-[#ba933e] -translate-y-1/2 bg-white text-black p-1 rounded-full cursor-pointer z-50 hover:bg-[#ba933e] hover:text-white">
          <svg
            className="w-4 h-4 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default BestSellerCarousel;
