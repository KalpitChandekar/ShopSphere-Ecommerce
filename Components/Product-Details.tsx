"use client";

import Stripe from "stripe";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/Cart-Store";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const [selectedImage, setSelectedImage] = useState(
    product.images && product.images.length > 0 ? product.images[0] : ""
  );

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: selectedImage,
      quantity: 1,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-2xl shadow- overflow-hidden p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image Section */}
            <div>
              {selectedImage && (
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-3 mt-4 justify-center md:justify-start">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                        selectedImage === img
                          ? "border-blue-500 shadow-md"
                          : "border-gray-300 hover:border-blue-400"
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${i}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Details Section */}
            <div className="flex flex-col">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-gray-500 ml-2">(152 Reviews)</span>
              </div>
              {product.description && (
                <p className="text-gray-600 mb-6 leading-relaxed text-base lg:text-lg">
                  {product.description}
                </p>
              )}
              {price && price.unit_amount && (
                <p className="text-3xl font-bold text-gray-900 mb-6">
                  ₹{(price.unit_amount / 100).toFixed(2)}
                </p>
              )}

              {/* Quantity Controls and Add to Cart Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-full px-2 py-1 w-fit">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(product.id)}
                    disabled={quantity === 0}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                  <span className="text-xl font-semibold w-8 text-center text-gray-800">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onAddItem}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
                  Add to Cart
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
