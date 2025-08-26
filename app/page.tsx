import Image from "next/image";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { Button } from "@/Components/ui/button";
import { Carousel } from "@/Components/Carousel";
import Stripe from "stripe";
import {
  TruckIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  HeartIcon,
  StarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  });

  const featuredProducts = products.data.slice(0, 3);
  const carouselProducts = products.data.slice(3, 8);

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-20 left-1/4 w-60 h-60 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="max-w-7xl mx-auto md:mt-8 py-20 relative z-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
              <StarIcon className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
              Trusted by 10,000+ customers
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ShopSphere
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Discover premium products at unbeatable prices. Your one-stop
                destination for quality shopping with fast delivery and
                exceptional service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <Link href="/products" className="inline-flex items-center">
                  Shop Now
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-medium hover:bg-blue-50 transition-all duration-200"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="text-3xl font-bold text-green-600">4.9★</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative group">
            {/* Main Image */}
            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
              <Image
                alt="Featured Product"
                src="/hero.avif"
                className="rounded-2xl shadow-2xl w-full"
                width={493}
                height={740}
                priority
              />
              {/* Overlay for better text visibility */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div> */}
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 lg:-left-8 -left-2 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-40 transform group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  In Stock
                </span>
              </div>
            </div>

            <div className="absolute -bottom-8 lg:-right-8 -right-2 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-40 transform group-hover:scale-105 transition-transform duration-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-xs text-gray-600">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 bg-white border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
              <TruckIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-600">On orders over ₹999</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-200">
              <ShieldCheckIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-600">100% secure checkout</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
              <CurrencyDollarIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Best Prices
            </h3>
            <p className="text-gray-600">Competitive pricing</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
              <HeartIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">Always here to help</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked products that our customers love most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => {
              const price = product.default_price as Stripe.Price;
              return (
                <div key={product.id} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                    {product.images?.[0] && (
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      {price?.unit_amount && (
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">
                            ₹{(price.unit_amount / 100).toFixed(2)}
                          </span>
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          >
                            <Link href={`/products/${product.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
            >
              <Link href="/products">
                View All Products
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Now
          </h2>
          <p className="text-xl text-gray-600">
            Don&apos;t miss out on these popular items
          </p>
        </div>
        <Carousel products={carouselProducts} />
      </section>
    </>
  );
}
