"use client";

import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/Components/ui/card";
import { useCartStore } from "@/store/Cart-Store";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">🛒 Your Cart is Empty</h1>
        <p className="text-gray-500">
          Looks like you haven’t added anything yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-14 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center">Checkout</h1>
      <Card className="max-w-3xl w-full mx-auto shadow-xl rounded-2xl border border-gray-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold">
            🧾 Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-gray-500 text-sm">
                    ₹{(item.price / 100).toFixed(2)} each
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      –
                    </Button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addItem({ ...item, quantity: 1 })}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <span className="font-semibold text-lg">
                  ₹{((item.price * item.quantity) / 100).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center text-xl font-bold">
            <span>Total</span>
            <span>₹{(total / 100).toFixed(2)}</span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <form action={checkoutAction} className="w-full">
            <input type="hidden" name="items" value={JSON.stringify(items)} />
            <Button
              type="submit"
              variant="default"
              className="w-full py-6 text-lg"
            >
              💳 Proceed to Payment
            </Button>
          </form>
          <Button
            onClick={clearCart}
            variant="outline"
            className="w-full py-6 text-lg"
          >
            🗑 Clear Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
