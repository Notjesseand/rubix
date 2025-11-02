"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Nav from "@/components/firstNav";
import Footer from "@/components/footer";
import ProductCard from "@/components/productCard";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
}

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchCategoryItems() {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching category products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (category) fetchCategoryItems();
  }, [category]);

  return (
    <div className="font-montserrat">
      <Nav />

      <div className="mt-20 px-6 pb-14 md:px-20 mb-16">
        <h1 className="text-3xl font-bold mb-8 capitalize text-center">
          {decodeURIComponent(category as string).replace(/-/g, " ")} Collection
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading items...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-24 sm:px-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                price={product.price}
                image={product.thumbnail}
                product={product as any}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
