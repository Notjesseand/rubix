"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import FirstNav from "@/components/firstNav";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="font-montserrat">
      <Nav />
            <FirstNav/>
      

      {/* Header */}
      <section className="mt-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-wide"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          We’d love to hear from you! Reach out with any questions, feedback, or
          inquiries.
        </p>
      </section>

      {/* Contact Form + Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 py-20">
        {/* Left - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-md border"
        >
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border rounded-lg px-4 py-3 focus:outline-none focus:border-[#ba933e]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border rounded-lg px-4 py-3 focus:outline-none focus:border-[#ba933e]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border rounded-lg px-4 py-3 focus:outline-none focus:border-[#ba933e]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border rounded-lg px-4 py-3 focus:outline-none focus:border-[#ba933e] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#ba933e] text-white py-3 rounded-lg font-semibold hover:bg-[#a68536] transition-all"
          >
            Send Message
          </button>
        </motion.form>

        {/* Right - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center space-y-8"
        >
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-gray-600">
            Have questions about our products, services, or partnership
            opportunities? Our team is here to help.
          </p>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-[#ba933e]">Email</h3>
              <p>support@yourbrand.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#ba933e]">Phone</h3>
              <p>+234 800 123 4567</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#ba933e]">Office</h3>
              <p>123 Luxury Street, Lagos, Nigeria</p>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="font-semibold text-[#ba933e] mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9:00 AM – 6:00 PM</p>
            <p className="text-gray-600">Sat: 10:00 AM – 4:00 PM</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
