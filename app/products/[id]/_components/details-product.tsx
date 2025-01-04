"use client";

import { ProductDTO } from "@/app/_data/get-products";
import DetailsDelivery from "@/app/_components/details-delivery";
import NameProduct from "./name-product";
import AddToCartButton from "./add-to-cart-button";
import DiscountBadge from "@/app/_components/discount-badge";
import { calculateFinalPrice, formatPrice } from "@/app/_helpers/prices";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import AboutProduct from "./about-product";
import ExtraProducts from "./extra-products";

interface ProductDetailsProps {
  product: ProductDTO;
  aditionalProducts: ProductDTO[];
}

const DetailsProduct = ({
  product,
  aditionalProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecreaseQuantity = () =>
    setQuantity((prev) => Math.max(1, prev - 1));
  return (
    <div className="p-5 relative z-50 mt-[-1.5rem] rounded-tr-3xl rounded-tl-3xl space-y-5 bg-white">
      <NameProduct product={product} />
      <div className="flex justify-between">
        <div>
          <div className="flex gap-1">
            <h2 className="font-semibold text-xl">
              {calculateFinalPrice(product.price, product.discountPercentage)}
            </h2>
            {product.discountPercentage > 0 && (
              <DiscountBadge product={product} />
            )}
          </div>
          {product.discountPercentage > 0 && (
            <p className="text-muted-foreground text-sm">
              De: {formatPrice(product.price)}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border-gray-300 h-10 w-10"
            onClick={handleDecreaseQuantity}
          >
            <ChevronLeft />
          </Button>
          <span className="text-sm">{quantity}</span>
          <Button className="h-9 w-9" onClick={handleIncreaseQuantity}>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <DetailsDelivery restaurant={product.restaurant} />
      <AboutProduct description={product.description} />
      <ExtraProducts aditionalProducts={aditionalProducts} />
      <AddToCartButton product={product} quantity={quantity} />
    </div>
  );
};

export default DetailsProduct;
