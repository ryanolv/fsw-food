export const formatPrice = (price: number) => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(price));
};

export const calculateFinalPrice = (price: number, discount: number) => {
  return formatPrice(price - (price * discount) / 100);
};
