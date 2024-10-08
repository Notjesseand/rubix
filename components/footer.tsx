import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Accordion from "./ui/accordion";

const Footer = () => {
  const faqs = [
    {
      title: "Information Company ",
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
  return (
    <div className=" bg-[#1a1a1a] mt-20 px-6 sm:px-10 sm:pt-10 text-white font-montserrat pb-44">
      {/* PC */}
      <div className="grid md:grid-cols-4 pt-10 gap-x-4">
        {/* rubix logo , 1/4*/}
        <div>
          <p className="font-bold text-3xl text-white font-montserrat">RUBIX</p>
          <div className="flex text-white text-3xl justify-between mt-6 pr-6 max-w-[50vw]">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterest />
            <FaYoutube />
          </div>
        </div>
        {/* Information Company */}
        <div>
          <p className="font-semibold text-base">Information Company</p>
          <div className="text-[#8e8e8e] pt-2 space-y-2 text-sm hidden md:block">
            <p>Your Account</p>
            <p>Track Your Order</p>
            <p>FAQs</p>
            <p>Payment Methods</p>
            <p>Shipping Guide</p>
            <p>Products Support</p>
            <p>Gift Card Balance</p>
          </div>

          <div className="mt-5 md:hidden">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title} content={faq.content} />
            ))}
          </div>
        </div>

        {/* more from RUBIX */}
      </div>
    </div>
  );
};

export default Footer;
