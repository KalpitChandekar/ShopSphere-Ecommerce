import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/Components/Navbar";

export const metadata: Metadata = {
  title: "ShopSphere | Ecommerce Website",
  description: "Modern ecommerce site built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
