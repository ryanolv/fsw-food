import { db } from "../_lib/prisma";
import { Category, Restaurant } from "@prisma/client";

export interface RestaurantDTO extends Omit<Restaurant, "deliveryFee"> {
  deliveryFee: number;
  categories?: Category[];
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
  return restaurants.map((restaurant) => ({
    ...restaurant,
    deliveryFee: Number(restaurant.deliveryFee),
  }));
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
  return {
    ...restaurant,
    deliveryFee: Number(restaurant.deliveryFee),
  };
};
