"use client";
import Nav from "@/components/firstNav";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Transform Your Living Room with Minimalist Furniture",
    excerpt:
      "Discover how clean lines, neutral tones, and smart layouts can completely redefine your living room aesthetic. Learn how to blend comfort and modern elegance effortlessly.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    date: "October 15, 2025",
    author: "Interior by Studio Lux",
    tags: ["design", "furniture", "minimalism"],
  },
  {
    id: 2,
    title: "The Art of Choosing Timeless Pieces",
    excerpt:
      "Quality over quantity — learn how to identify furniture that lasts a lifetime. From solid wood craftsmanship to sustainable materials, find the pieces that never go out of style.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80",
    date: "September 22, 2025",
    author: "Olivia Grace",
    tags: ["lifestyle", "home decor", "sustainability"],
  },
];

export default function BlogsPage() {
  return (
    <div className="font-montserrat">
      <Nav />

      {/* Header */}
      <section className="mt-20 text-center px-6">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Our Latest Articles
        </h1>
        <p className="text-gray-500 mt-2">
          Inspiration, design ideas, and expert advice for a stylish home.
        </p>
      </section>

      {/* Blog Grid */}
      <div className="grid gap-10 px-6 sm:px-10 md:px-16 py-16 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-52 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center justify-between mb-2 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="font-bold text-xl mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#ba933e]/10 text-[#ba933e] px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blogs/${post.id}`}
                className="text-[#ba933e] font-semibold mt-4 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
