"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/firstNav"; // or "@/components/Nav" depending on which you use
import Footer from "@/components/footer";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";

interface CartItem {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart data from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Helper to update localStorage + state
  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Increase quantity
  const increaseQuantity = (id: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  // Decrease quantity
  const decreaseQuantity = (id: number) => {
    const updated = cart
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  // Remove item
  const removeItem = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  // Calculate totals
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="font-montserrat min-h-screen flex flex-col bg-[#fafafa]">
      <Nav />

      <div className="mt-28 w-11/12 md:w-3/4 mx-auto flex-1">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md p-4 rounded-2xl"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-full sm:w-1/2">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-gray-500 text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-3 sm:mt-0">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Total per item */}
                <div className="mt-3 sm:mt-0 text-center sm:text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 mt-3 sm:mt-0"
                >
                  <IoTrashOutline className="text-xl" />
                </button>
              </div>
            ))}

            {/* Cart Total */}
            <div className="bg-white shadow-md p-6 rounded-2xl mt-6 flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-xl font-bold">Total:</h2>
              <p className="text-2xl font-extrabold text-[#ba933e]">
                ${totalAmount.toFixed(2)}
              </p>
            </div>

            {/* Checkout Button */}
            <div className="text-center mt-4">
              <button className="bg-[#ba933e] text-white font-semibold py-3 px-10 rounded-full hover:bg-[#a58335] transition-all">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
