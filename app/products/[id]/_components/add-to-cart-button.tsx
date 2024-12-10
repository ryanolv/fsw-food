"use client";

import Cart from "@/app/_components/cart";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
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
  const { addProductToCart, products, clearCartAndAddProduct } =
    useContext(CartContext);

  const productFromOtherRestaurant: boolean =
    product.restaurant.id !== products[0]?.restaurant.id;

  if (productFromOtherRestaurant && products.length > 0)
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="w-full">Adicionar ao carrinho</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[85%] rounded-xl">
          <AlertDialogHeader>
            <AlertDialogDescription>
              Você só pode adicionar produtos de um mesmo restaurante ao
              carrinho. Deseja limpar o carrinho e adicionar este produto?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-gray-400">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => clearCartAndAddProduct(product, quantity)}
            >
              Limpar e adicionar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

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
        <Cart restaurant={product.restaurant} />
      </SheetContent>
    </Sheet>
  );
};

export default AddToCartButton;
