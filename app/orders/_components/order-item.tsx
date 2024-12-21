import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { ORDER_STATUS_LABELS } from "@/app/_constants/order-status";
import { OrderDTO } from "@/app/_data/get-orders";
import { formatPrice } from "@/app/_helpers/prices";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface OrderItemProps {
  order: OrderDTO;
}

const OrderItem = ({ order }: OrderItemProps) => {
  return (
    <div className="rounded-lg border border-solid border-gray-200 p-5 space-y-3">
      <Badge>
        {ORDER_STATUS_LABELS[order.status as keyof typeof ORDER_STATUS_LABELS]}
      </Badge>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <Avatar className="h-5 w-5">
            <AvatarImage src={order.restaurant.imageUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="text-sm font-semibold">{order.restaurant.name}</h2>
        </div>
        <Link href={`/restaurants/${order.restaurant.id}`}>
          <ChevronRight />
        </Link>
      </div>
      <Separator />
      <div className="space-y-1">
        {order.productsOrder.map((productOrder) => (
          <div
            className="flex gap-1 items-center"
            key={productOrder.product.id}
          >
            <div className="bg-muted-foreground text-center text-sm text-white  rounded-full h-6 w-6">
              <p>{productOrder.quantity}</p>
            </div>
            <p className="text-muted-foreground text-xs">
              {productOrder.product.name}
            </p>
          </div>
        ))}
      </div>
      <Separator />
      <div className="flex justify-between items-center">
        <h3 className="text-sm">{formatPrice(Number(order.totalPrice))}</h3>
        <Button
          variant="ghost"
          className="font-semibold text-xs text-primary focus:text-primary/70"
          disabled={order.status !== "DELIVERED"}
        >
          Adicionar à Sacola
        </Button>
      </div>
    </div>
  );
};

export default OrderItem;
