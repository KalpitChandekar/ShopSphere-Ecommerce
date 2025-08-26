"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

interface Props {
  products: Stripe.Product[];
}

export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length, isPlaying, isHovered]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const currentProduct = products[current];
  const price = currentProduct?.default_price as Stripe.Price;

  if (!products.length) return null;

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel */}
      <Card
        className="relative overflow-hidden rounded-2xl shadow-2xl border-none bg-gradient-to-br from-gray-900 to-gray-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {currentProduct?.images?.[0] && (
          <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
            <Image
              src={currentProduct.images[0]}
              alt={currentProduct.name}
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              priority
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30"></div>
          </div>
        )}

        {/* Content Overlay */}
        <CardContent className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white">
          <div className="max-w-2xl">
            {/* Category Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-white mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Featured Product
            </div>

            {/* Product Name */}
            <CardTitle className="text-3xl md:text-5xl font-bold mb-4 text-shadow-lg">
              {currentProduct.name}
            </CardTitle>

            {/* Description */}
            {currentProduct.description && (
              <p className="text-lg md:text-xl text-white/90 mb-6 line-clamp-3">
                {currentProduct.description}
              </p>
            )}

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {price?.unit_amount && (
                <div className="flex items-center space-x-2">
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    ₹{(price.unit_amount / 100).toFixed(2)}
                  </span>
                  <span className="text-lg text-white/70 line-through">
                    ₹{((price.unit_amount * 1.2) / 100).toFixed(2)}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                    20% OFF
                  </span>
                </div>
              )}

              <Button
                asChild
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <Link
                  href={`/products/${currentProduct.id}`}
                  className="inline-flex items-center"
                >
                  <ShoppingBagIcon className="w-5 h-5 mr-2" />
                  Shop Now
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none p-2 backdrop-blur-sm"
          onClick={goToPrevious}
          aria-label="Previous product"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-none p-2 backdrop-blur-sm"
          onClick={goToNext}
          aria-label="Next product"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Button>

        {/* Play/Pause Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white border-none p-2 backdrop-blur-sm"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <PauseIcon className="w-5 h-5" />
          ) : (
            <PlayIcon className="w-5 h-5" />
          )}
        </Button>
      </Card>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="hidden md:flex justify-center mt-8 space-x-4 overflow-x-auto py-2">
        {products.map((product, index) => {
          const thumbnailPrice = product.default_price as Stripe.Price;
          return (
            <div
              key={product.id}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                index === current
                  ? "ring-2 ring-blue-500 shadow-lg scale-105"
                  : "hover:scale-105 hover:shadow-md"
              }`}
              onClick={() => goToSlide(index)}
            >
              <Card
                className={`w-32 overflow-hidden ${
                  index === current ? "border-blue-500" : "border-gray-200"
                }`}
              >
                {product.images?.[0] && (
                  <div className="relative h-20 w-full">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-2">
                  <p className="text-xs font-medium text-gray-900 truncate">
                    {product.name}
                  </p>
                  {thumbnailPrice?.unit_amount && (
                    <p className="text-xs text-blue-600 font-semibold">
                      ₹{(thumbnailPrice.unit_amount / 100).toFixed(0)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{
            width: `${((current + 1) / products.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};
