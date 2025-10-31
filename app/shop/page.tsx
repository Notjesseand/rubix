// // // // "use client";
// // // // import { useState, useEffect } from "react";
// // // // import { IoSearchOutline } from "react-icons/io5";
// // // // import { PiHandbagLight } from "react-icons/pi";
// // // // import FirstNav from "@/components/firstNav";
// // // // import Footer from "@/components/footer";

// // // // // temporary demo data (to be replaced with API)
// // // // const demoProducts = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Leather Office Chair",
// // // //     price: 120,
// // // //     image: "/products/chair1.webp",
// // // //   },
// // // //   { id: 2, name: "Pendant Lamp", price: 90, image: "/products/lamp1.webp" },
// // // //   { id: 3, name: "Classic Sofa", price: 340, image: "/products/sofa1.webp" },
// // // //   { id: 4, name: "Wooden Stool", price: 60, image: "/products/stool1.webp" },
// // // //   {
// // // //     id: 5,
// // // //     name: "Dining Table Set",
// // // //     price: 550,
// // // //     image: "/products/table1.webp",
// // // //   },
// // // //   { id: 6, name: "Wall Art Frame", price: 40, image: "/products/frame1.webp" },
// // // // ];

// // // // export default function ShopPage() {
// // // //   const [query, setQuery] = useState("");
// // // //   const [filtered, setFiltered] = useState(demoProducts);

// // // //   useEffect(() => {
// // // //     if (!query.trim()) {
// // // //       setFiltered(demoProducts);
// // // //     } else {
// // // //       setFiltered(
// // // //         demoProducts.filter((p) =>
// // // //           p.name.toLowerCase().includes(query.toLowerCase())
// // // //         )
// // // //       );
// // // //     }
// // // //   }, [query]);

// // // //   return (
// // // //     <div className="bg-[#f6f6f6] font-nunito min-h-screen">
// // // //       <FirstNav />

// // // //       {/* Search Bar */}
// // // //       <div className="bg-white shadow-md mt-6 mx-auto w-11/12 md:w-3/4 rounded-full flex items-center px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#ba933e]">
// // // //         <IoSearchOutline className="text-xl text-gray-500" />
// // // //         <input
// // // //           type="text"
// // // //           autoFocus
// // // //           value={query}
// // // //           onChange={(e) => setQuery(e.target.value)}
// // // //           placeholder="Search for products..."
// // // //           className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 font-montserrat"
// // // //         />
// // // //       </div>

// // // //       {/* Product Grid */}
// // // //       <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 md:px-12">
// // // //         {filtered.length > 0 ? (
// // // //           filtered.map((item) => (
// // // //             <div
// // // //               key={item.id}
// // // //               className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
// // // //             >
// // // //               <div className="relative">
// // // //                 <img
// // // //                   src={item.image}
// // // //                   alt={item.name}
// // // //                   className="w-full h-52 object-cover group-hover:scale-105 transition-all duration-300"
// // // //                 />
// // // //                 <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
// // // //                   <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center hover:bg-[#ba933e] hover:text-white">
// // // //                     <PiHandbagLight />
// // // //                   </div>
// // // //                   <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center hover:bg-[#ba933e] hover:text-white">
// // // //                     <IoSearchOutline />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="p-4">
// // // //                 <p className="font-montserrat font-semibold text-base truncate">
// // // //                   {item.name}
// // // //                 </p>
// // // //                 <p className="text-[#ba933e] font-bold mt-1">${item.price}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <div className="col-span-full text-center py-20 text-gray-500 font-montserrat">
// // // //             No products found for “{query}”
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";
// // // import { useState, useEffect } from "react";
// // // import { IoSearchOutline } from "react-icons/io5";
// // // import FirstNav from "@/components/firstNav";
// // // import Footer from "@/components/footer";
// // // import ProductCard from "@/components/productCard";

// // // // temporary demo data (to be replaced with API)
// // // const demoProducts = [
// // //   {
// // //     id: 1,
// // //     name: "Leather Office Chair",
// // //     price: 120,
// // //     image: "/products/chair1.webp",
// // //   },
// // //   { id: 2, name: "Pendant Lamp", price: 90, image: "/products/lamp1.webp" },
// // //   { id: 3, name: "Classic Sofa", price: 340, image: "/products/sofa1.webp" },
// // //   { id: 4, name: "Wooden Stool", price: 60, image: "/products/stool1.webp" },
// // //   {
// // //     id: 5,
// // //     name: "Dining Table Set",
// // //     price: 550,
// // //     image: "/products/table1.webp",
// // //   },
// // //   { id: 6, name: "Wall Art Frame", price: 40, image: "/products/frame1.webp" },
// // // ];

// // // export default function ShopPage() {
// // //   const [query, setQuery] = useState("");
// // //   const [filtered, setFiltered] = useState(demoProducts);

// // //   useEffect(() => {
// // //     if (!query.trim()) {
// // //       setFiltered(demoProducts);
// // //     } else {
// // //       setFiltered(
// // //         demoProducts.filter((p) =>
// // //           p.name.toLowerCase().includes(query.toLowerCase())
// // //         )
// // //       );
// // //     }
// // //   }, [query]);

// // //   return (
// // //     <div className="bg-[#f6f6f6] font-nunito min-h-screen">
// // //       <FirstNav />

// // //       {/* Search Bar */}
// // //       <div className="bg-white shadow-md mt-6 mx-auto w-11/12 md:w-3/4 rounded-full flex items-center px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#ba933e]">
// // //         <IoSearchOutline className="text-xl text-gray-500" />
// // //         <input
// // //           type="text"
// // //           autoFocus
// // //           value={query}
// // //           onChange={(e) => setQuery(e.target.value)}
// // //           placeholder="Search for products..."
// // //           className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 font-montserrat"
// // //         />
// // //       </div>

// // //       {/* Product Grid */}
// // //       <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 md:px-12">
// // //         {filtered.length > 0 ? (
// // //           filtered.map((item) => (
// // //             <ProductCard
// // //               key={item.id}
// // //               name={item.name}
// // //               price={item.price}
// // //               image={item.image}
// // //               onAddToCart={() => console.log("Added to cart:", item.name)}
// // //               onView={() => console.log("View product:", item.name)}
// // //             />
// // //           ))
// // //         ) : (
// // //           <div className="col-span-full text-center py-20 text-gray-500 font-montserrat">
// // //             No products found for “{query}”
// // //           </div>
// // //         )}
// // //       </div>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { useState, useEffect } from "react";
// // import { IoSearchOutline } from "react-icons/io5";
// // import FirstNav from "@/components/firstNav";
// // import Footer from "@/components/footer";
// // import ProductCard from "@/components/productCard";

// // // Fetch all products
// // async function fetchAll() {
// //   const url = `https://dummyjson.com/products/category/furniture`;

// //   try {
// //     const res = await fetch(url, { cache: "force-cache" });
// //     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
// //     const data = await res.json();
// //     return data.products;
// //   } catch (error) {
// //     console.error("Error fetching furniture:", error);
// //     return [];
// //   }
// // }

// // // Fetch products by search term
// // async function fetchBySearch(query: string) {
// //   const url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
// //     query
// //   )}`;

// //   try {
// //     const res = await fetch(url, { cache: "no-store" });
// //     if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
// //     const data = await res.json();
// //     return data.products;
// //   } catch (error) {
// //     console.error("Error fetching searched products:", error);
// //     return [];
// //   }
// // }

// // export default function ShopPage() {
// //   const [query, setQuery] = useState("");
// //   const [products, setProducts] = useState<any[]>([]);
// //   const [loading, setLoading] = useState(true);

// //   // Initial fetch for all products
// //   useEffect(() => {
// //     async function loadProducts() {
// //       setLoading(true);
// //       const data = await fetchAll();
// //       setProducts(data);
// //       setLoading(false);
// //     }
// //     loadProducts();
// //   }, []);

// //   // Fetch based on search
// //   useEffect(() => {
// //     const delay = setTimeout(async () => {
// //       if (query.trim()) {
// //         setLoading(true);
// //         const data = await fetchBySearch(query);
// //         setProducts(data);
// //         setLoading(false);
// //       } else {
// //         // if search is cleared, reload all
// //         const data = await fetchAll();
// //         setProducts(data);
// //       }
// //     }, 400); // debounce search a bit
// //     return () => clearTimeout(delay);
// //   }, [query]);

// //   return (
// //     <div className="bg-[#f6f6f6] font-nunito min-h-screen">
// //       <FirstNav />

// //       {/* Search Bar */}
// //       <div className="bg-white shadow-md mt-20 mx-auto w-11/12 md:w-3/4 rounded-full flex items-center px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#ba933e]">
// //         <IoSearchOutline className="text-xl text-gray-500" />
// //         <input
// //           type="text"
// //           autoFocus
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search for products..."
// //           className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 font-montserrat"
// //         />
// //       </div>

// //       {/* Product Grid */}
// //       <div className="py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 md:px-12">
// //         {loading ? (
// //           <div className="col-span-full text-center py-20 text-gray-500 font-montserrat">
// //             Loading products...
// //           </div>
// //         ) : products.length > 0 ? (
// //           products.map((item) => (
// //             <ProductCard
// //               key={item.id}
// //               name={item.title}
// //               price={item.price}
// //               image={item.thumbnail}
// //             />
// //           ))
// //         ) : (
// //           <div className="col-span-full text-center py-20 text-gray-500 font-montserrat">
// //             No products found for “{query}”
// //           </div>
// //         )}
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }


// // "use client";

// // import React, { useEffect, useState } from "react";
// // import Nav from "@/components/firstNav";
// // import Footer from "@/components/footer";
// // import ProductCard from "@/components/productCard"; // the reusable card we made earlier
// // import { IoSearchOutline } from "react-icons/io5";

// // interface Product {
// //   id: number;
// //   title: string;
// //   price: number;
// //   thumbnail: string;
// //   category?: string;
// // }

// // interface CartItem extends Product {
// //   quantity: number;
// // }

// // export default function FurniturePage() {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [cart, setCart] = useState<CartItem[]>([]);

// //   // ✅ Fetch furniture products by default
// //   async function fetchFurniture() {
// //     try {
// //       const res = await fetch(
// //         "https://dummyjson.com/products/"
// //       );
// //       const data = await res.json();
// //       setProducts(data.products || []);
// //     } catch (error) {
// //       console.error("Error fetching furniture:", error);
// //     }
// //   }

// //   // ✅ Search products
// //   async function fetchBySearch(query: string) {
// //     if (!query.trim()) return fetchFurniture();

// //     try {
// //       const res = await fetch(
// //         `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
// //       );
// //       const data = await res.json();
// //       setProducts(data.products || []);
// //     } catch (error) {
// //       console.error("Error searching:", error);
// //     }
// //   }

// //   // ✅ Handle add to cart
// //   const addToCart = (product: Product) => {
// //     setCart((prevCart) => {
// //       const itemInCart = prevCart.find(
// //         (cartItem) => cartItem.id === product.id
// //       );

// //       const updatedCart = itemInCart
// //         ? prevCart.map((cartItem) =>
// //             cartItem.id === product.id
// //               ? { ...cartItem, quantity: cartItem.quantity + 1 }
// //               : cartItem
// //           )
// //         : [...prevCart, { ...product, quantity: 1 }];

// //       localStorage.setItem("cart", JSON.stringify(updatedCart));
// //       return updatedCart;
// //     });
// //   };

// //   // ✅ Restore cart on load
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem("cart");
// //     if (savedCart) {
// //       setCart(JSON.parse(savedCart));
// //     }
// //   }, []);

// //   // ✅ Load furniture initially
// //   useEffect(() => {
// //     fetchFurniture();
// //   }, []);

// //   // ✅ Derived count
// //   const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

// //   // ✅ Clear cart
// //   const clearCart = () => {
// //     localStorage.removeItem("cart");
// //     setCart([]);
// //   };

// //   return (
// //     <div className="font-custom">
// //       <Nav count={cartCount} cart={cart} clearCart={clearCart} />

// //       {/* Search Bar */}
// //        <div className="bg-white shadow-md mt-20 mx-auto w-11/12 md:w-3/4 rounded-full flex items-center px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#ba933e]">
// //          <IoSearchOutline className="text-xl text-gray-500" />
// //        <input
// //           type="text"
// //           autoFocus
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search for products..."
// //           className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 font-montserrat"
// //         />
// //       </div>

// //       {/* Products Grid */}
// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
// //         {products.length > 0 ? (
// //           products.map((product) => (
// //             <ProductCard
// //               key={product.id}
// //               name={product.title}
// //               price={product.price}
// //               image={product.thumbnail}
// //               onAddToCart={() => addToCart(product)}
// //             />
// //           ))
// //         ) : (
// //           <p className="text-center col-span-full text-gray-500">
// //             No products found.
// //           </p>
// //         )}
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }

// "use client";

// import React, { useEffect, useState } from "react";
// import Nav from "@/components/firstNav";
// import Footer from "@/components/footer";
// import ProductCard from "@/components/productCard";
// import { IoSearchOutline } from "react-icons/io5";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   thumbnail: string;
//   category?: string;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// export default function Page() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [cart, setCart] = useState<CartItem[]>([]);

//   // ✅ Fetch furniture products by default
//   async function fetchFurniture() {
//     try {
//       const res = await fetch(
//         "https://dummyjson.com/products/"
//       );
//       const data = await res.json();
//       setProducts(data.products || []);
//     } catch (error) {
//       console.error("Error fetching furniture:", error);
//     }
//   }

//   // ✅ Search products
//   async function fetchBySearch(query: string) {
//     if (!query.trim()) return fetchFurniture();

//     try {
//       const res = await fetch(
//         `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
//       );
//       const data = await res.json();

//       // filter to furniture category only (optional)
//       const filtered = (data.products || []).filter((item: Product) =>
//         item.category?.toLowerCase().includes("furniture")
//       );

//       setProducts(filtered);
//     } catch (error) {
//       console.error("Error searching:", error);
//     }
//   }

//   // ✅ Add to cart
//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const itemInCart = prevCart.find(
//         (cartItem) => cartItem.id === product.id
//       );
//       const updatedCart = itemInCart
//         ? prevCart.map((cartItem) =>
//             cartItem.id === product.id
//               ? { ...cartItem, quantity: cartItem.quantity + 1 }
//               : cartItem
//           )
//         : [...prevCart, { ...product, quantity: 1 }];

//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   // ✅ Restore cart from localStorage
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // ✅ Load furniture initially
//   useEffect(() => {
//     fetchFurniture();
//   }, []);

//   const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

//   const clearCart = () => {
//     localStorage.removeItem("cart");
//     setCart([]);
//   };

//   return (
//     <div className="font-custom min-h-screen bg-[#f6f6f6]">
//       {/* Top navigation */}
//       <Nav />

//       {/* Search Bar */}
//       <div className="bg-white shadow-md mt-24 mx-auto w-11/12 md:w-3/4 rounded-full flex items-center px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#ba933e]">
//         <IoSearchOutline className="text-xl text-gray-500" />
//         <input
//           type="text"
//           autoFocus
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && fetchBySearch(searchQuery)}
//           placeholder="Search for furniture..."
//           className="w-full px-3 py-2 bg-transparent outline-none text-gray-700 font-montserrat"
//         />
//       </div>

//       {/* Products Grid */}
//       <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
//         {products.length > 0 ? (
//           products.map((product) => (
//             <ProductCard
//               key={product.id}
//               name={product.title}
//               price={product.price}
//               image={product.thumbnail}
//               onAddToCart={() => addToCart(product)}
//             />
//           ))
//         ) : (
//           <p className="text-center col-span-full text-gray-500">
//             No furniture products found.
//           </p>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Nav from "@/components/firstNav";
import Footer from "@/components/footer";
import ProductCard from "@/components/productCard";
import { IoSearchOutline } from "react-icons/io5";

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

export default function FurniturePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Fetch furniture by default
  async function fetchFurniture() {
    try {
      const res = await fetch("https://dummyjson.com/products");
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

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="font-custom">
      <Nav count={cartCount} cart={cart} clearCart={clearCart} />

      {/* Search Bar */}
      <div className="bg-white shadow-md mt-20 mx-auto w-11/12 md:w-3/4 rounded-full flex items-center px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#ba933e]">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-1 space-y-20 sm:px-6 ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              price={product.price}
              image={product.thumbnail}
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
