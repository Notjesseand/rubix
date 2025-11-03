"use client";
import { useParams } from "next/navigation";
import Nav from "@/components/firstNav";
import Footer from "@/components/footer";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Transform Your Living Room with Minimalist Furniture",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    body: `
      Minimalist design isn’t about having less—it’s about making room for more of what truly matters. 
      When curating your living room, focus on balance, simplicity, and intentional comfort. 
      Use neutral colors, soft fabrics, and clean silhouettes to create an inviting, clutter-free space.
      
      Combine functionality with elegance by choosing multi-purpose furniture like modular sofas or nested tables.
      Add life with natural lighting and greenery to maintain warmth in the space.
    `,
    date: "October 15, 2025",
    author: "Interior by Studio Lux",
  },
  // ... replicate others if needed
];

export default function BlogDetails() {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post)
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Blog post not found.
      </div>
    );

  return (
    <div className="font-montserrat">
      <Nav />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold mb-3">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-8">
          {post.author} • {post.date}
        </p>

        <div className="relative h-80 w-full mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-xl"
            unoptimized
          />
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.body}
        </p>
      </div>

      <Footer />
    </div>
  );
}
