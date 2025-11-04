// import React from "react";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import Accordion from "./ui/accordion";
// import { TfiHeadphoneAlt } from "react-icons/tfi";
// import { MdLocationOn } from "react-icons/md";

// const Footer = () => {
//   const informationCompany = [
//     {
//       title: "Information Company ",
//       content: [
//         "Your Account",

//         "Track Your Order",

//         "FAQs",

//         "Payment Methods",

//         "Shipping Guide",

//         "Products Support",

//         "Gift Card Balance",
//       ],
//     },
//   ];

//   const faqs = [
//     {
//       title: "More from RUBIX",
//       content: [
//         "About Rubix",

//         "Our Guarantees",

//         "Terms and Conditions",

//         "Privacy Policy",

//         "Return Policy",

//         "Delivery & Return",

//         "Sitemap",
//       ],
//     },
//   ];
//   return (
//     <div className=" bg-[#1a1a1a] mt-32 sm:mt-20 px-6 sm:px-10 sm:pt-10 text-white font-montserrat pb-10">
//       {/* PC */}
//       <div className="grid md:grid-cols-4 pt-6 sm:pt-0 gap-x-4">
//         {/* rubix logo , 1/4*/}
//         <div>
//           <p className="font-bold text-xl sm:text-3xl text-white font-montserrat">
//             RUBIX
//           </p>
//           <div className="flex text-white text-xl sm:text-3xl gap-x-4 sm:justify-between mt-6 pr-6 sm:max-w-[50vw]">
//             <FaFacebookF />
//             <FaTwitter />
//             <FaInstagram />
//             <FaPinterest />
//             <FaYoutube />
//           </div>
//         </div>
//         {/* Information Company */}
//         <div>
//           <div className="text-[#8e8e8e] pt-2 space-y-3 text-sm hidden md:block">
//             <p className="font-semibold text-base text-white">
//               Information Company
//             </p>
//             <p className="cursor-pointer">Your Account</p>
//             <p className="cursor-pointer">Track Your Order</p>
//             <p className="cursor-pointer">FAQs</p>
//             <p className="cursor-pointer">Payment Methods</p>
//             <p className="cursor-pointer">Shipping Guide</p>
//             <p className="cursor-pointer">Products Support</p>
//             <p className="cursor-pointer">Gift Card Balance</p>
//           </div>

//           <div className="mt-8 md:hidden">
//             {informationCompany.map((faq, index) => (
//               <Accordion key={index} title={faq.title} content={faq.content} />
//             ))}
//           </div>
//         </div>

//         {/* more from RUBIX */}
//         <div>
//           <div className="text-[#8e8e8e] pt-2 space-y-3 text-sm hidden md:block">
//             <p className="font-semibold text-base text-white">
//               More from RUBIX
//             </p>
//             <p className="cursor-pointer">About Rubix</p>
//             <p className="cursor-pointer">Our Guarantees</p>
//             <p className="cursor-pointer">Terms and Conditions</p>
//             <p className="cursor-pointer">Privacy Policy</p>
//             <p className="cursor-pointer">Return Policy</p>
//             <p className="cursor-pointer">Delivery & Return</p>
//             <p className="cursor-pointer">Sitemap</p>
//           </div>

//           <div className="mt-4 md:hidden">
//             {faqs.map((faq, index) => (
//               <Accordion key={index} title={faq.title} content={faq.content} />
//             ))}
//           </div>
//         </div>

//         {/* let's talk */}
//         <div>
//           <div className="text-[#8e8e8e] pt-6 sm:pt-2 space-y-3 text-sm ">
//             <p className="font-semibold text-base text-white">
//               Let&apos;s talk
//             </p>
//             <p className="cursor-pointer flex items-center gap-2 mt-1">
//               <TfiHeadphoneAlt className="text-lg" /> +391 (0)35 2568 4593
//             </p>
//             <p>@jessennorom@gmail.com</p>
//           </div>
//           {/* find us */}
//           <div className="text-[#8e8e8e] pt-5 space-y-3 text-sm ">
//             <p className="font-semibold text-base text-white">Find Us</p>
//             <p className="cursor-pointer flex items-center gap-2 mt-1">
//               <MdLocationOn className="text-lg" /> Nsukka, Nigeria
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdLocationOn } from "react-icons/md";
import Accordion from "./ui/accordion";

const Footer = () => {
  const informationCompany = [
    {
      title: "eCommerce Company",
      content: [
        "Your Account",
        "Track Your Order",
        "FAQs",
        "Payment Methods",
        "Shipping Guide",
        "Products Support",
        "Gift Card Balance",
      ],
    },
  ];

  const moreFromRubix = [
    {
      title: "More from RUBIX",
      content: [
        "About Rubix",
        "Our Guarantees",
        "Terms and Conditions",
        "Privacy Policy",
        "Return Policy",
        "Delivery & Return",
        "Sitemap",
      ],
    },
  ];

  return (
    <footer className="bg-[#111] text-white font-montserrat mt-32 sm:mt-20">
      <div className="px-6 sm:px-10 py-12">
        {/* Grid Layout */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + Social */}
          <div>
            <p className="font-bold text-3xl tracking-wide text-white">RUBIX</p>
            <p className="text-[#aaa] mt-3 text-sm leading-relaxed max-w-xs">
              Elevating your eCommerce experience with timeless design and
              global reach.
            </p>

            <div className="flex gap-4 mt-6 text-xl">
              <a
                href="#"
                className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#ba933e] transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#ba933e] transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#ba933e] transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#ba933e] transition-all duration-300"
              >
                <FaPinterest />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#ba933e] transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Information Company */}
          <div>
            {/* Desktop */}
            <div className="hidden md:block">
              <p className="font-semibold text-lg text-white mb-4">
                eCommerce Company
              </p>
              <ul className="space-y-2 text-[#bdbdbd] text-sm">
                {informationCompany[0].content.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-[#ba933e] transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden mt-2">
              {informationCompany.map((faq, i) => (
                <Accordion key={i} title={faq.title} content={faq.content} />
              ))}
            </div>
          </div>

          {/* More from Rubix */}
          <div>
            <div className="hidden md:block">
              <p className="font-semibold text-lg text-white mb-4">
                More from RUBIX
              </p>
              <ul className="space-y-2 text-[#bdbdbd] text-sm">
                {moreFromRubix[0].content.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-[#ba933e] transition-colors cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden mt-2">
              {moreFromRubix.map((faq, i) => (
                <Accordion key={i} title={faq.title} content={faq.content} />
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-semibold text-lg text-white mb-4">
              Let&apos;s Talk
            </p>
            <div className="text-[#bdbdbd] text-sm space-y-3">
              <p className="flex items-center gap-2">
                <TfiHeadphoneAlt className="text-[#ba933e]" />
                +391 (0)35 2568 4593
              </p>
              <p className="text-[#ba933e] cursor-pointer hover:underline">
                jessennorom@gmail.com
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-lg text-white mb-2">Find Us</p>
              <p className="flex items-center gap-2 text-[#bdbdbd] text-sm">
                <MdLocationOn className="text-[#ba933e]" />
                Nsukka, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-[#aaa]">
          © {new Date().getFullYear()} RUBIX. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
