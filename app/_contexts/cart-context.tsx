"use client";

import { createContext, useState } from "react";
import { ProductDTO } from "../_data/get-products";

export interface IProductCart extends ProductDTO {
  quantity: number;
}

export interface ICartContext {
  products: IProductCart[];
  subtotal: number;
  discounts: number;
  totalProducts: number;
  addProductToCart: (product: ProductDTO, quantity: number) => void;
  clearCartAndAddProduct: (product: ProductDTO, quantity: number) => void;
  removeProductFromCart: (product: ProductDTO) => void;
  incrementQuantityToProduct: (product: ProductDTO) => void;
  decrementQuantityToProduct: (product: ProductDTO) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  subtotal: 0,
  discounts: 0,
  totalProducts: 0,
  addProductToCart: () => {},
  clearCartAndAddProduct: () => {},
  removeProductFromCart: () => {},
  incrementQuantityToProduct: () => {},
  decrementQuantityToProduct: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<IProductCart[]>([]);

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  const discounts = products.reduce(
    (acc, product) =>
      acc +
      (product.price * product.quantity * product.discountPercentage) / 100,
    0,
  );

  const totalProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  const addProductToCart = (product: ProductDTO, quantity: number) => {
    const productFromOtherRestaurant = products.some(
      (p) => p.restaurant.id !== product.restaurant.id,
    );
    if (productFromOtherRestaurant) {
      throw new Error("You can't add products from other restaurants");
    }
    const productAlraedyInCart = products.some((p) => p.id === product.id);
    if (productAlraedyInCart) {
      return setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p,
        ),
      );
    }
    setProducts((prev) => [...prev, { ...product, quantity }]);
  };

  const clearCartAndAddProduct = (product: ProductDTO, quantity: number) => {
    setProducts([{ ...product, quantity }]);
  };

  const removeProductFromCart = (product: ProductDTO) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const incrementQuantityToProduct = (product: ProductDTO) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    );
  };

  const decrementQuantityToProduct = (product: ProductDTO) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id
          ? { ...p, quantity: Math.max(1, p.quantity - 1) }
          : p,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        subtotal,
        discounts,
        totalProducts,
        addProductToCart,
        clearCartAndAddProduct,
        removeProductFromCart,
        incrementQuantityToProduct,
        decrementQuantityToProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
