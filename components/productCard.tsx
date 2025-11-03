// components/productCard.tsx
"use client";
import { useState } from "react";
import { PiHandbagLight } from "react-icons/pi";
import { RiInfoI } from "react-icons/ri";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, Package, Truck, Shield, Tag } from "lucide-react";
import { IoInformation } from "react-icons/io5";
import { AiOutlineInfo } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { toast } from "sonner";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  brand: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  reviews: Review[];
  images: string[];
  thumbnail: string;
}

interface ProductCardProps {
  id: number; // ✅ ensure id is passed directly
  name: string;
  price: number | string;
  image: string;
  onAddToCart?: () => void;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  const [details, setDetails] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const discountedPrice = details?.discountPercentage
    ? (details.price * (1 - details.discountPercentage / 100)).toFixed(2)
    : null;

  // ✅ Fetch full product data when dialog opens
  const fetchProductDetails = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product details");
      const data = await res.json();
      setDetails(data);
    } catch (err) {
      console.error("Error loading product details:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-56 sm:h-80 md:h-96 w-5/6 mx-auto relative cursor-pointer group transition-all duration-300">
      <div
        className="bg-contain bg-no-repeat bg-center h-full w-full flex transition-all duration-300 group-hover:scale-95"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Action Buttons */}
        <div className="absolute right-0 top-5  transition-opacity duration-300">
          {/* 🛍 Add to Cart */}
          <div
            onClick={onAddToCart}
            className=" h-10 w-10 sm:h-11 sm:w-11 rounded text-xl md:text-2xl bg-transparent  flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all"
          >
            <PiHandbagLight className="" />
          </div>

          {/* ℹ️ Product Info Dialog */}
          <div className="md:mt-2">
            <Dialog onOpenChange={(open) => open && fetchProductDetails()}>
              <DialogTrigger asChild>
                <div className="h-10 w-10 sm:h-11 sm:w-11 -mt-2 rounded text-xl md:text-2xl bg-transparent flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all cursor-pointer">
                  {/* <RiInfoI /> */}
                  <FaRegEye />
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6 font-montserrat">
                {loading ? (
                  <p className="text-center text-gray-500 py-8">
                    Loading details...
                  </p>
                ) : details ? (
                  <>
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold">
                        {details.title}
                      </DialogTitle>
                      <DialogDescription className="text-sm text-muted-foreground">
                        {details.brand || "Generic Brand"} • ID: {details.id}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      {/* Images */}
                      <div className="space-y-3">
                        <div className="relative aspect-square rounded-lg overflow-hidden border">
                          <Image
                            src={details.thumbnail}
                            alt={details.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>

                        {details.images?.length > 1 && (
                          <div className="grid grid-cols-3 gap-2">
                            {details.images.slice(0, 3).map((img, i) => (
                              <div
                                key={i}
                                className="relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-80 transition"
                              >
                                <Image
                                  src={img}
                                  alt={`Product ${i + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="space-y-4 flex flex-col justify-between">
                        <div className="space-y-5">
                          <p className="text-gray-600">{details.description}</p>

                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold">
                              ${discountedPrice || details.price}
                            </span>
                            {discountedPrice && (
                              <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                                -{details.discountPercentage}%
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${
                                    i < Math.floor(details.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-medium">
                              {details.rating.toFixed(1)}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2">
                              <Package className="w-4 h-4 text-gray-500" />
                              <span>Stock: {details.stock}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Truck className="w-4 h-4 text-gray-500" />
                              <span>
                                {details.shippingInformation ||
                                  "Ships worldwide"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Shield className="w-4 h-4 text-gray-500" />
                              <span>
                                {details.warrantyInformation ||
                                  "1-year warranty"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Tag className="w-4 h-4 text-gray-500" />
                              <span>
                                {details.returnPolicy || "30-day return policy"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button
                            onClick={onAddToCart}
                            className="px-7 py-2 bg-black text-white rounded mx-auto flex text-sm mt-10"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    No product details available.
                  </p>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Product Info Below Card */}
      <div className="mt-2 text-center">
        <p className="md:font-semibold text-sm  md:text-lg font-montserrat line-clamp-2">
          {name}
        </p>
        <p className="font-montserrat text-sm md:text-lg">${price}</p>
      </div>
    </div>
  );
}
