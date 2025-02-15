"use client";

import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { CartContext } from "../_contexts/cart-context";
import CartItem from "./cart-item";
import { formatPrice } from "../_helpers/prices";
import { RestaurantDTO } from "../_data/get-restaurants";
import { createOrder } from "../_actions/create-order";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
import { Loader2 } from "lucide-react";
import { OrderStatus } from "@prisma/client";
import { toast } from "sonner";

interface CartProps {
  restaurant: RestaurantDTO;
}

const Cart = ({ restaurant }: CartProps) => {
  const { data } = useSession();
  const { products, subtotal, discounts, clearCart } = useContext(CartContext);
  const deliveryFeeRestaurant = Number(restaurant.deliveryFee);
  const totalPrice = subtotal + deliveryFeeRestaurant - discounts;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinishOrderClick = async () => {
    if (!data?.user)
      return toast.error("Você precisa estar logado para finalizar a compra");

    try {
      setIsSubmitting(true);
      await createOrder({
        id: uuidv4(),
        totalPrice: totalPrice,
        subtotal: subtotal,
        discounts: discounts,
        status: OrderStatus.PENDING,
        restaurant: {
          connect: { id: restaurant.id },
        },
        user: {
          connect: { id: data?.user.id },
        },
        deliveryFee: deliveryFeeRestaurant,
        deliveryTimeMinutes: restaurant.deliveryTimeMinutes,
        productsOrder: {
          createMany: {
            data: products.map((product) => ({
              quantity: product.quantity,
              productId: product.id,
            })),
          },
        },
      });

      clearCart();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-rows-12 h-full">
      <h1 className="text-lg font-semibold row-span-1">Sacola</h1>
      <div className="row-span-7 space-y-5 flex-shrink-0 overflow-auto">
        {products.map((product) => (
          <CartItem key={product.id} productCart={product} />
        ))}
      </div>
      <div className="space-y-6 row-span-4 flex justify-end flex-col">
        <Card className="border-gray-200 ">
          <CardContent className="space-y-2 py-5">
            <div className="flex justify-between items-center text-sm ">
              <h3 className="text-muted-foreground">Subtotal</h3>
              <h4>{formatPrice(subtotal)}</h4>
            </div>
            <Separator />
            <div className="flex justify-between items-center text-sm">
              <h3 className="text-muted-foreground">Entrega</h3>
              <h4 className="text-primary">
                {" "}
                {deliveryFeeRestaurant === 0
                  ? "GRÁTIS"
                  : formatPrice(deliveryFeeRestaurant)}
              </h4>
            </div>
            <Separator />
            <div className="flex justify-between items-center text-sm">
              <h3 className="text-muted-foreground">Descontos</h3>
              <h4>- {formatPrice(discounts)}</h4>
            </div>
            <Separator />
            <div className="flex justify-between items-center text-sm font-semibold">
              <h3>Total</h3>
              <h4>{formatPrice(totalPrice)}</h4>
            </div>
          </CardContent>
        </Card>
        <Button
          className="w-full"
          onClick={handleFinishOrderClick}
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="animate-spin" />}
          Finalizar compra
        </Button>
      </div>
    </div>
  );
};

export default Cart;
