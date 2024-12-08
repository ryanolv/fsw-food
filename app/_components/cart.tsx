"use client";

import { useContext } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { CartContext } from "../_contexts/cart-context";
import CartItem from "./cart-item";
import { formatPrice } from "../_helpers/prices";
import { RestaurantDTO } from "../_data/get-restaurants";

interface CartProps {
  restaurant: RestaurantDTO;
}

const Cart = ({ restaurant }: CartProps) => {
  const { products, subtotal, discounts } = useContext(CartContext);
  const deliveryFeeRestaurant = Number(restaurant.deliveryFee);
  const totalPrice = subtotal + deliveryFeeRestaurant - discounts;
  return (
    <div className="grid grid-rows-12 h-full">
      <h1 className="text-lg font-semibold row-span-1">Sacola</h1>
      {/* ITEMS */}
      <div className="row-span-7 space-y-5 flex-shrink-0 overflow-auto">
        {products.map((product) => (
          <CartItem key={product.id} productCart={product} />
        ))}
      </div>
      {/* RESUME */}
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
        <Button className="w-full">Finalizar compra</Button>
      </div>
    </div>
  );
};

export default Cart;
