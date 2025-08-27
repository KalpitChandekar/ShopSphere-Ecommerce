"use client";

import { useCartStore } from "@/store/Cart-Store";
import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase 🎉 <br /> Your order is being processed
          and you’ll receive updates soon.
        </p>

        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
