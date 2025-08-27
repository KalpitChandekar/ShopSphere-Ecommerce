"use client";

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen mt-20 container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Shipping & Returns</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Shipping Policy</h2>
        <p className="text-gray-600 mt-2">
          We process and ship orders within 2-3 business days. Delivery times
          vary based on your location, but typically take 5-7 business days
          within the United States.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Returns Policy</h2>
        <p className="text-gray-600 mt-2">
          If you are not satisfied with your purchase, you may return items
          within 30 days of delivery for a full refund. Items must be unused and
          in original packaging.
        </p>
      </section>
    </div>
  );
}
