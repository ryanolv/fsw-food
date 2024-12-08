"use client";

import Image from "next/image";
import { CartContext, IProductCart } from "../_contexts/cart-context";
import { calculateFinalPrice, formatPrice } from "../_helpers/prices";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Trash2Icon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  productCart: IProductCart;
}

const CartItem = ({ productCart }: CartItemProps) => {
  const {
    incrementQuantityToProduct,
    decrementQuantityToProduct,
    removeProductFromCart,
  } = useContext(CartContext);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <div className="w-20 h-20 relative">
          <Image
            src={productCart.imageUrl}
            alt={productCart.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-sm">{productCart.name}</h2>
          <div className="flex gap-1 items-center">
            <h3 className="font-semibold ">
              {calculateFinalPrice(
                productCart.price * productCart.quantity,
                productCart.discountPercentage,
              )}
            </h3>
            {productCart.discountPercentage > 0 && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(productCart.price * productCart.quantity)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-gray-300 h-8 w-8"
              onClick={() => decrementQuantityToProduct(productCart)}
            >
              <ChevronLeft />
            </Button>
            <span className="text-sm">{productCart.quantity}</span>
            <Button
              className="h-8 w-8"
              onClick={() => incrementQuantityToProduct(productCart)}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Button
          variant="outline"
          className="border-gray-300 h-10 w-10 rounded-lg"
          onClick={() => removeProductFromCart(productCart)}
        >
          <Trash2Icon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
