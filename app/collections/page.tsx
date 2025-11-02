"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "@/components/firstNav";
import Footer from "@/components/footer";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function CollectionsPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all categories
  async function fetchCategories() {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategories(data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="font-montserrat">
      <Nav />

      <div className="mt-20 mb-16 px-6 md:px-20 pb-14">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center font-montserrat py-4">
          Browse Our Collections
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading categories...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {categories.map((cat: any, i) => {
              // Support both object or string API format
              const slug = cat.slug || cat.name || cat;
              const label =
                typeof cat === "string"
                  ? cat.replace(/-/g, " ")
                  : cat.name?.replace(/-/g, " ") || slug;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md hover:bg-[#f7f5ef] transition-all cursor-pointer"
                >
                  <Link
                    href={`/collections/${encodeURIComponent(slug)}`}
                    className="flex items-center justify-between"
                  >
                    <span className="capitalize font-medium text-sm sm:text-lg group-hover:text-[#ba933e]">
                      {label}
                    </span>
                    <IoIosArrowForward className="text-gray-400 group-hover:text-[#ba933e]" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
