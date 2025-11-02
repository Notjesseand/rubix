// "use client";

// import { FaInfo } from "react-icons/fa6";

// import { PiHandbagLight } from "react-icons/pi";
// import Image from "next/image";
// import { IoInformation } from "react-icons/io5";
// import { SlInfo } from "react-icons/sl";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// interface ProductCardProps {
//   name: string;
//   price: number | string;
//   image: string;
//   imageAlt?: string;
//   onAddToCart?: () => void;
//   onView?: () => void;
// }

// export default function ProductCard({
//   name,
//   price,
//   image,
//   imageAlt,
//   onAddToCart,
//   onView,
// }: ProductCardProps) {
//   return (
//     <div className="h-56 sm:h-80 md:h-96 w-5/6 mx-auto relative cursor-pointer group transition-all duration-300">
//       {/* Image Container */}
//       <div
//         className="bg-contain bg-no-repeat bg-center h-full w-full flex transition-all duration-300 group-hover:scale-95"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         {/* Action Buttons */}
//         <div className="absolute right-2 top-5 z-50 transition-opacity duration-300">
//           {/* Add to Cart */}
//           <div
//             onClick={onAddToCart}
//             className="h-10 w-10 sm:h-11 sm:w-11 rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all"
//           >
//             <PiHandbagLight />
//           </div>

//           {/* Search / View */}
//           <div
//             onClick={onView}
//             className="h-10 w-10 sm:h-11 sm:w-11 mt-2 rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all"
//           >
//             {/* <IoInformation /> */}

//             <Dialog>
//               <DialogTrigger>
//                 {" "}
//                 <SlInfo />
//               </DialogTrigger>
//               <DialogContent>
//                 <DialogHeader>
//                   <DialogTitle>Are you absolutely sure?</DialogTitle>
//                   <DialogDescription>
//                     This action cannot be undone. This will permanently delete
//                     your account and remove your data from our servers.
//                   </DialogDescription>
//                 </DialogHeader>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="mt-2 text-center">
//         <p className="font-semibold text-lg font-montserrat">{name}</p>
//         <p className="mt-1 font-montserrat">${price}</p>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { FaInfo } from "react-icons/fa6";
// import { PiHandbagLight } from "react-icons/pi";
// import { SlInfo } from "react-icons/sl";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Star, Package, Truck, Shield, Clock, Tag } from "lucide-react";
// import { format } from "date-fns";

// interface Review {
//   rating: number;
//   comment: string;
//   date: string;
//   reviewerName: string;
//   reviewerEmail: string;
// }

// interface ProductDetails {
//   id: number;
//   title: string;
//   description: string;
//   brand: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   returnPolicy: string;
//   reviews: Review[];
//   images: string[];
//   thumbnail: string;
// }

// interface ProductCardProps {
//   name: string;
//   price: number | string;
//   image: string;
//   imageAlt?: string;
//   onAddToCart?: () => void;
//   product: ProductDetails; // Full product data
// }

// export default function ProductCard({
//   name,
//   price,
//   image,
//   imageAlt,
//   onAddToCart,
//   product,
// }: ProductCardProps) {
//   const discountedPrice = product?.discountPercentage
//     ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
//     : null;

//   const averageRating = product?.rating.toFixed(1);
//   const totalReviews = product?.reviews.length;

//   return (
//     <div className="h-56 sm:h-80 md:h-96 w-5/6 mx-auto relative cursor-pointer group transition-all duration-300">
//       {/* Image Container */}
//       <div
//         className="bg-contain bg-no-repeat bg-center h-full w-full flex transition-all duration-300 group-hover:scale-95"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         {/* Action Buttons */}
//         <div className="absolute right-2 top-5 z-50 transition-opacity duration-300">
//           {/* Add to Cart */}
//           <div
//             onClick={onAddToCart}
//             className="h-10 w-10 sm:h-11 sm:w-11 rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all shadow-md"
//           >
//             <PiHandbagLight />
//           </div>

//           {/* Product Details Dialog */}
//           <div className="mt-2">
//             <Dialog>
//               <DialogTrigger asChild>
//                 <div className="h-10 w-10 sm:h-11 sm:w-11 rounded text-2xl bg-white flex justify-center items-center hover:bg-[#BA933E] hover:text-white font-extrabold transition-all shadow-md cursor-pointer">
//                   <SlInfo />
//                 </div>
//               </DialogTrigger>
//               <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6">
//                 <DialogHeader>
//                   <DialogTitle className="text-2xl font-bold">
//                     {product?.title}
//                   </DialogTitle>
//                   <DialogDescription className="text-sm text-muted-foreground">
//                     {product?.brand} • SKU: {product?.sku || product?.id}
//                   </DialogDescription>
//                 </DialogHeader>

//                 <div className="grid md:grid-cols-2 gap-6 mt-4">
//                   {/* Images */}
//                   <div className="space-y-3">
//                     <div className="relative aspect-square rounded-lg overflow-hidden border">
//                       <Image
//                         src={product?.thumbnail}
//                         alt={product?.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                     {product?.images.length > 1 && (
//                       <div className="grid grid-cols-3 gap-2">
//                         {product?.images.slice(0, 3).map((img, i) => (
//                           <div
//                             key={i}
//                             className="relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-80 transition"
//                           >
//                             <Image
//                               src={img}
//                               alt={`Product ${i + 1}`}
//                               fill
//                               className="object-cover"
//                             />
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Info */}
//                   <div className="space-y-4">
//                     <div>
//                       <p className="text-lg text-gray-600">
//                         {product?.description}
//                       </p>
//                     </div>

//                     {/* Price */}
//                     <div className="flex items-center gap-3">
//                       <span className="text-3xl font-bold">
//                         ${discountedPrice || product?.price}
//                       </span>
//                       {discountedPrice && (
//                         <>
//                           <span className="text-xl text-gray-500 line-through">
//                             ${product?.price}
//                           </span>
//                           <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
//                             -{product?.discountPercentage}%
//                           </span>
//                         </>
//                       )}
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2">
//                       <div className="flex">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-5 h-5 ${
//                               i < Math.floor(product?.rating)
//                                 ? "fill-yellow-400 text-yellow-400"
//                                 : "text-gray-300"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                       <span className="font-medium">{averageRating}</span>
//                       <span className="text-sm text-gray-500">
//                         ({totalReviews} reviews)
//                       </span>
//                     </div>

//                     {/* Quick Info */}
//                     <div className="grid grid-cols-2 gap-3 text-sm">
//                       <div className="flex items-center gap-2">
//                         <Package className="w-4 h-4 text-gray-500" />
//                         <span>
//                           <strong>Stock:</strong> {product?.stock}{" "}
//                           {product?.availabilityStatus}
//                         </span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Truck className="w-4 h-4 text-gray-500" />
//                         <span>{product?.shippingInformation}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Shield className="w-4 h-4 text-gray-500" />
//                         <span>{product?.warrantyInformation}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Tag className="w-4 h-4 text-gray-500" />
//                         <span>{product?.returnPolicy}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Reviews Section */}
//                 <div className="mt-8 border-t pt-6">
//                   <h3 className="text-lg font-semibold mb-4">
//                     Customer Reviews
//                   </h3>
//                   <div className="space-y-4">
//                     {product?.reviews.length > 0 ? (
//                       product?.reviews.map((review, i) => (
//                         <div key={i} className="border-b pb-4 last:border-0">
//                           <div className="flex items-center justify-between mb-1">
//                             <div className="flex items-center gap-2">
//                               <span className="font-medium">
//                                 {review?.reviewerName}
//                               </span>
//                               <div className="flex">
//                                 {[...Array(5)].map((_, idx) => (
//                                   <Star
//                                     key={idx}
//                                     className={`w-4 h-4 ${
//                                       idx < review.rating
//                                         ? "fill-yellow-400 text-yellow-400"
//                                         : "text-gray-300"
//                                     }`}
//                                   />
//                                 ))}
//                               </div>
//                             </div>
//                             <span className="text-xs text-gray-500">
//                               {/* {format(new Date(review.date), "MMM d, yyyy")}     */}
//                             </span>
//                           </div>
//                           <p className="text-sm text-gray-700 mt-1">
//                             {review?.comment}
//                           </p>
//                         </div>
//                       ))
//                     ) : (
//                       <p className="text-sm text-gray-500">No reviews yet.</p>
//                     )}
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>
//       </div>

//       {/* Product Info */}
//       <div className="mt-2 text-center">
//         <p className="font-semibold text-lg font-montserrat line-clamp-2">
//           {name}
//         </p>
//         <div className="flex items-center justify-center gap-2 mt-1">
//           <p className="font-montserrat text-lg">${price}</p>
//           {discountedPrice && (
//             <p className="text-sm text-gray-500 line-through">
//               ${product?.price}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

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
        <div className="absolute right-0 top-5 z-50 transition-opacity duration-300">
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
                  <RiInfoI />
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
                      <div className="space-y-4">
                        <p className="text-lg text-gray-600">
                          {details.description}
                        </p>

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
                              {details.shippingInformation || "Ships worldwide"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-gray-500" />
                            <span>
                              {details.warrantyInformation || "1-year warranty"}
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
