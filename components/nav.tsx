// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { BsPerson } from "react-icons/bs";
// import { IoSearchOutline } from "react-icons/io5";
// import { PiHandbagLight } from "react-icons/pi";

// const Nav = () => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowNavbar(true);
//       } else {
//         setShowNavbar(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div
//       className={`slide-in-top z-50 bg-[#ffffff] py-4 px-5 sm:px-16 fixed top-0 justify-between flex w-full drop-shadow-lg ${
//         showNavbar ? "block" : "hidden"
//       }`}
//     >
//       {/* Navbar content */}
//       <Link href="/">

//       <h1 className="font-nunito text-2xl sm:text-3xl font-extrabold tracking-widest">
//         RUBIX
//       </h1>
//       </Link>

//       <div className="hidden lg:flex font-montserrat items-center gap-9 text-base">
//         <p className="cursor-pointer">Home</p>
//         <p className="cursor-pointer">Shop</p>
//         <p className="cursor-pointer">Collections</p>
//         <p className="cursor-pointer">Blogs</p>
//         <p className="cursor-pointer">Contact Us</p>
//       </div>

//       <div className="flex items-center text-2xl gap-3">
//         <BsPerson className="cursor-pointer" />
//         <span className="h-6 w-[1.5px] bg-black"></span>
//         <IoSearchOutline className="cursor-pointer" />
//         <span className="h-6 w-[1.5px] bg-black"></span>
//         <PiHandbagLight className="cursor-pointer" />
//       </div>
//     </div>
//   );
// };

// export default Nav;

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbagLight } from "react-icons/pi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useRouter, usePathname } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🧭 Scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 130);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🛒 Cart count tracking
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const cart = JSON.parse(storedCart);
        const total = cart.reduce(
          (count: number, item: any) => count + item.quantity,
          0
        );
        setCartCount(total);
      } else {
        setCartCount(0);
      }
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white z-50 drop-shadow-lg transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-5 md:py-6 px-5 md:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img src="/rubix.png" alt="RUBIX Logo" className="h-10" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex font-montserrat items-center gap-9">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <p
                className={`cursor-pointer transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#ba933e] font-semibold"
                    : "hover:text-[#ba933e] text-gray-800"
                }`}
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Icons + Mobile Menu Toggle */}
        <div className="flex items-center text-2xl gap-3 relative">
          <Link href="/login">
            <BsPerson className="cursor-pointer" />
          </Link>

          <span className="h-6 w-[1.5px] bg-black hidden sm:inline-block"></span>

          <IoSearchOutline
            className="cursor-pointer"
            onClick={() => router.push("/shop?search=true")}
          />

          <span className="h-6 w-[1.5px] bg-black hidden sm:inline-block"></span>

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <PiHandbagLight className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#ba933e] text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-3xl ml-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white z- shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4 py-6 px-8 font-montserrat">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg cursor-pointer transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#ba933e] font-semibold"
                  : "hover:text-[#ba933e] text-gray-800"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
