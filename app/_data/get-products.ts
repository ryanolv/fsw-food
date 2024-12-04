import { db } from "../_lib/prisma";

export interface productDTO {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  discountPercentage: number;
  restaurant: string;
}

export const getProducts = async (): Promise<productDTO[]> => {
  const products = await db.product.findMany({
    take: 5,
    select: {
      id: true,
      name: true,
      imageUrl: true,
      price: true,
      discountPercentage: true,
      restaurant: {
        select: { name: true },
      },
    },
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    restaurant: product.restaurant.name,
  }));
};