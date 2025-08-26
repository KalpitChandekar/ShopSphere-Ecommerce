import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/Components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "ShopSphere | E-commerce Website",
  description: "Modern e-commerce site built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
