"use client";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen mt-20 container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p className="text-gray-600 mt-2">
          By accessing and using this website, you agree to comply with these
          Terms & Conditions.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Use of Our Services</h2>
        <p className="text-gray-600 mt-2">
          Our products are for personal use only. You agree not to misuse our
          services or attempt to disrupt the website functionality.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p className="text-gray-600 mt-2">
          We are not liable for any indirect, incidental, or consequential
          damages arising from the use of our website or services.
        </p>
      </section>
    </div>
  );
}
