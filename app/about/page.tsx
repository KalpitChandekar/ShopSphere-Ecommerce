// app/about/page.tsx (Next.js App Router)

import { Button } from "@/Components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            About <span className="text-indigo-600">Our Store</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We believe shopping should be simple, secure, and enjoyable. Our
            mission is to bring you premium products with a seamless experience.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            What started as a small idea to make online shopping easier has
            grown into a trusted platform where customers can explore and
            purchase with confidence. We focus on quality, reliability, and
            customer satisfaction.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With secure Stripe payments, modern design, and fast service, we’re
            here to give you a smooth shopping journey every time.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image src="/about.png" alt="Our story" height={923} width={1896} />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-gray-900">Quality</h3>
              <p className="text-sm text-gray-600 mt-2">
                We handpick products to ensure premium standards.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-gray-900">Trust</h3>
              <p className="text-sm text-gray-600 mt-2">
                Safe & secure payments powered by Stripe.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
              <p className="text-sm text-gray-600 mt-2">
                Quick delivery so you get your products on time.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-gray-900">Customer First</h3>
              <p className="text-sm text-gray-600 mt-2">
                Your satisfaction is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to explore our products?
        </h2>
        <Link href="/products">
          <Button className="rounded-full px-6 py-3 text-lg">Shop Now</Button>
        </Link>
      </section>
    </div>
  );
}
