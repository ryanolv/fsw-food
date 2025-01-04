import { db } from "../_lib/prisma";

export const getCategories = async () => {
  return await db.category.findMany({});
};

export const getCategory = async (id: string) => {
  return await db.category.findUnique({ where: { id } });
};
