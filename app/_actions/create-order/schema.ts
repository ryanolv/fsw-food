import { OrderStatus } from "@prisma/client";
import { z } from "zod";

export const createOrderSchema = z.object({
  id: z.string().uuid(),
  totalPrice: z.number(),
  subtotal: z.number(),
  discounts: z.number(),
  status: z.enum([
    OrderStatus.PENDING,
    OrderStatus.DELIVERED,
    OrderStatus.CANCELED,
  ]),
  restaurantId: z.string(),
  userId: z.string(),
  products: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
      imageUrl: z.string(),
      price: z.number(),
      discountPercentage: z.number(),
      restaurantId: z.string(),
      categoryId: z.string(),
    }),
  ),
  deliveryFee: z.number(),
  deliveryTimeMinutes: z.number(),
});

export type CreateOrderSchema = z.infer<typeof createOrderSchema>;
