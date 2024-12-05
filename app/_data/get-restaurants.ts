import { Decimal } from "@prisma/client/runtime/library";
import { db } from "../_lib/prisma";
import { Category } from "@prisma/client";

export interface RestaurantDTO {
  id: string;
  name: string;
  imageUrl: string;
  deliveryFee: Decimal;
  deliveryTimeMinutes: number;
  categories: Category[];
}

export const getRestaurants = async (): Promise<RestaurantDTO[]> => {
  const restaurants = await db.restaurant.findMany({
    take: 5,
    select: {
      id: true,
      name: true,
      imageUrl: true,
      deliveryFee: true,
      deliveryTimeMinutes: true,
      categories: true,
    },
  });
  return restaurants;
};

export const getEspecificRestaurant = async (
  id: string,
): Promise<RestaurantDTO> => {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      imageUrl: true,
      deliveryFee: true,
      deliveryTimeMinutes: true,
      categories: true,
    },
  });
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }
  return restaurant;
};
