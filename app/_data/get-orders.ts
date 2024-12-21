import { db } from "../_lib/prisma";

export interface OrderDTO {
  id: string;
  totalPrice: number;
  subtotal: number;
  discounts: number;
  status: string;
  deliveryFee: number;
  deliveryTimeMinutes: number;
  restaurant: {
    id: string;
    name: string;
    imageUrl: string;
  };
  productsOrder: {
    quantity: number;
    product: {
      id: string;
      name: string;
      price: number;
      imageUrl: string;
    };
  }[];
}

export const getOrders = async (): Promise<OrderDTO[]> => {
  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      productsOrder: {
        include: {
          product: true,
        },
      },
      restaurant: true,
    },
  });

  return orders.map((order) => {
    return {
      ...order,
      totalPrice: Number(order.totalPrice),
      subtotal: Number(order.subtotal),
      discounts: Number(order.discounts),
      deliveryFee: Number(order.deliveryFee),
      productsOrder: order.productsOrder.map((productOrder) => ({
        ...productOrder,
        product: {
          ...productOrder.product,
          price: Number(productOrder.product.price),
        },
      })),
    };
  });
};
