"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen mt-20 container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal information.
      </p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p className="text-gray-600 mt-2">
          We collect personal details such as your name, email, and payment
          information to process orders and improve our services.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">How We Use Your Information</h2>
        <p className="text-gray-600 mt-2">
          Your information is used to complete transactions, provide customer
          support, and improve your shopping experience.
        </p>
      </section>
    </div>
  );
}
