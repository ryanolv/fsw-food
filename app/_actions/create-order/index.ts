"use server";

import { Prisma } from "@prisma/client";
import { db } from "../../_lib/prisma";
// import { createOrderSchema, CreateOrderSchema } from "./schema";

export const createOrder = async (data: Prisma.OrderCreateInput) => {
  // createOrderSchema.parse(data);
  console.log(data);
  return await db.order.create({
    data,
  });
};
