import { Decimal } from "@prisma/client/runtime/library";
import { db } from "../_lib/prisma";

export interface RestaurantDTO {
  id: string;
  name: string;
  imageUrl: string;
  deliveryFee: Decimal;
  deliveryTimeMinutes: number;
}

export const getRestaurants = async (): Promise<RestaurantDTO[]> => {
  const restaurants = await db.restaurant.findMany({
    take: 5,
  });
  return restaurants;
};
