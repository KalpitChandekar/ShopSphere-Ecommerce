import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
  viewMode?: "grid" | "list";
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Product Image */}
        {product.images?.[0] && (
          <div className="relative h-56 w-full overflow-hidden bg-gray-100">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Card Body */}
        <CardContent className="flex flex-grow flex-col p-5">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-1">
            {product.name}
          </h3>

          {product.description && (
            <p className="mb-3 text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          )}

          {price?.unit_amount && (
            <p className="mb-4 text-lg font-bold text-indigo-600">
              ₹{(price.unit_amount / 100).toFixed(2)}
            </p>
          )}

          <Button className="mt-auto w-full rounded-full bg-black text-white transition hover:bg-gray-800">
            View Details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};
