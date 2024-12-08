"use client";

import Cart from "@/app/_components/cart";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { CartContext } from "@/app/_contexts/cart-context";
import { RestaurantDTO } from "@/app/_data/get-restaurants";
import { formatPrice } from "@/app/_helpers/prices";
import { useContext } from "react";

interface CartSummaryProps {
  restaurant: RestaurantDTO;
}

const CartSummary = ({ restaurant }: CartSummaryProps) => {
  const { subtotal, totalProducts } = useContext(CartContext);
  if (totalProducts === 0) return null;
  return (
    <div className="flex sticky bottom-0 left-0 z-50 bg-white justify-between py-3 px-5  border-t border-solid border-gray-300">
      <div>
        <p className="text-muted-foreground text-sm">Total sem entrega</p>
        <p className="font-semibold">
          {formatPrice(subtotal)}{" "}
          <span className="text-muted-foreground text-xs">
            /{" "}
            {totalProducts > 1
              ? `${totalProducts} itens`
              : `${totalProducts} item`}
          </span>{" "}
        </p>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-32">Ver Sacola</Button>
        </SheetTrigger>
        <SheetContent className="w-[90%]">
          <Cart restaurant={restaurant} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSummary;
