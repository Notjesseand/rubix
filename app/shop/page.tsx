// app/shop/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ProductCard from "@/components/productCard";
import { IoSearchOutline } from "react-icons/io5";
import { toast } from "sonner";
import FirstNav from "@/components/firstNav";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category?: string;
}

interface CartItem extends Product {
  quantity: number;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Fetch only furniture by default
  async function fetchFurniture() {
    try {
      const res = await fetch(
        "https://dummyjson.com/products/category/groceries"
      );
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching furniture:", error);
    }
  }

  // ✅ Search products
  async function fetchBySearch(query: string) {
    if (!query.trim()) return fetchFurniture();

    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error searching:", error);
    }
  }

  // ✅ Add to cart + trigger update event
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find(
        (cartItem) => cartItem.id === product.id
      );

      const updatedCart = itemInCart
        ? prevCart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevCart, { ...product, quantity: 1 }];

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartUpdated")); // 🔔 instantly updates navbar
      // 🧁 Toast feedback
      toast.success(`${product.title} added to cart 🛍`, {
        description: "You can view it in your cart.",
        duration: 2500,
      });
      return updatedCart;
    });
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    fetchFurniture();
  }, []);

  // ✅ Run search automatically when searchQuery changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchBySearch(searchQuery);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="font-custom">
      <Nav />
     <FirstNav />
      {/* Search Bar */}
      <div className="bg-white shadow-md mt-10 sm:mt-14 mx-auto w-11/12 md:w-3/4 rounded-full flex items-center px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#ba933e]">
        <IoSearchOutline className="text-xl text-gray-500" />
        <input
          type="text"
          autoFocus
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 font-montserrat"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-6 px-3 gap-y-2 sm:gap-y-4 sm:px-6 py-6 sm:py-10">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              image={product.thumbnail}
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 mt-10">
            No products found.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
