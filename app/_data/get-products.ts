import { Restaurant } from "@prisma/client";
import { db } from "../_lib/prisma";

export interface productDTO {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  discountPercentage: number;
  restaurant: Restaurant;
}

export const getProducts = async (): Promise<productDTO[]> => {
  const products = await db.product.findMany({
    take: 5,
    select: {
      id: true,
      name: true,
      description: true,
      imageUrl: true,
      price: true,
      discountPercentage: true,
      restaurant: true,
    },
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};

export const getUniqueProduct = async (id: string): Promise<productDTO> => {
  const product = await db.product.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      imageUrl: true,
      description: true,
      price: true,
      discountPercentage: true,
      restaurant: true,
    },
  });
  if (!product) {
    throw new Error("Product not found");
  }

  return {
    ...product,
    price: Number(product.price),
  };
};

export const getEspecificProducts = async (
  restaurantId: string,
  category: string,
): Promise<productDTO[]> => {
  const products = await db.product.findMany({
    where: {
      restaurantId,
      category: {
        name: category,
      },
    },
    select: {
      id: true,
      name: true,
      description: true,
      imageUrl: true,
      price: true,
      discountPercentage: true,
      restaurant: true,
    },
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};
