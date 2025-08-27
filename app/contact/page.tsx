"use client";

import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import toast from "react-hot-toast";
import { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTimeout(() => {
      toast.success("Message Sent! Thanks for reaching out!");
    }, 1000); // delay of 1 second

    (event.target as HTMLFormElement).reset(); // Clears the form fields
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center px-6 min-h-screen md:my-0 my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas? Get in touch with us.
          We’d love to hear from you!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input type="text" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea placeholder="Write your message..." rows={4} required />
            </div>
            <Button type="submit" className="w-full bg-black text-white">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 shadow-inner rounded-xl p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out to us through email, phone, or visit us at our office.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>📍 Address:</strong> Nagpur, Maharashtra, India
            </li>
            <li>
              <strong>📧 Email:</strong> kalpitchandekar1736@gmail.com
            </li>
            <li>
              <strong>📞 Phone:</strong> +91 7057223745
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
