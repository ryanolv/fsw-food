import { OrderStatus } from "@prisma/client";

export const ORDER_STATUS_LABELS = {
  [OrderStatus.PENDING]: "Pendente",
  [OrderStatus.DELIVERED]: "Entregue",
  [OrderStatus.DELIVERING]: "Entregando",
  [OrderStatus.CANCELED]: "Cancelado",
  [OrderStatus.PREPARING]: "Preparando",
};
