"use client";

import Cart from "@/app/_components/cart";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { CartContext } from "@/app/_contexts/cart-context";
import { ProductDTO } from "@/app/_data/get-products";
import { useContext } from "react";

interface AddToCartButtonProps {
  product: ProductDTO;
  quantity: number;
}

const AddToCartButton = ({ product, quantity }: AddToCartButtonProps) => {
  const { addProductToCart } = useContext(CartContext);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="w-full"
          onClick={() => addProductToCart(product, quantity)}
        >
          Adicionar ao carrinho
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%]">
        <Cart />
      </SheetContent>
    </Sheet>
  );
};

export default AddToCartButton;
