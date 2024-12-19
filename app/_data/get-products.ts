import { Product } from "@prisma/client";
import { db } from "../_lib/prisma";
import { RestaurantDTO } from "./get-restaurants";

export interface ProductDTO extends Omit<Product, "price"> {
  price: number;
  restaurant: RestaurantDTO;
}

export const getProducts = async (
  quantity: number = 5,
): Promise<ProductDTO[]> => {
  const products = await db.product.findMany({
    take: quantity,
    select: {
      id: true,
      name: true,
      description: true,
      imageUrl: true,
      price: true,
      discountPercentage: true,
      restaurant: true,
      categoryId: true,
    },
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};

export const getUniqueProduct = async (id: string): Promise<ProductDTO> => {
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
      categoryId: true,
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
  restaurantId: string = "",
  category: string,
): Promise<ProductDTO[]> => {
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
      categoryId: true,
    },
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};

export const getProductsByCategory = async (
  categoryId: string,
): Promise<ProductDTO[]> => {
  const products = await db.product.findMany({
    where: {
      categoryId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      imageUrl: true,
      price: true,
      discountPercentage: true,
      restaurant: true,
      categoryId: true,
    },
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};
