"use client";

export default function FAQPage() {
  return (
    <div className="min-h-screen mt-20 container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">How do I track my order?</h2>
          <p className="text-gray-600">
            Once your order is shipped, you will receive a confirmation email
            with a tracking link.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            What payment methods do you accept?
          </h2>
          <p className="text-gray-600">
            We accept all major credit cards, debit cards, and secure payments
            through Stripe.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            Can I cancel or change my order?
          </h2>
          <p className="text-gray-600">
            Orders can be modified or cancelled within 24 hours of purchase by
            contacting our support team.
          </p>
        </div>
      </div>
    </div>
  );
}
