"use client";

import DiscountBadge from "@/app/_components/discount-badge";
import { Button } from "@/app/_components/ui/button";
import { productDTO } from "@/app/_data/get-products";
import { calculateFinalPrice, formatPrice } from "@/app/_helpers/prices";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PriceProductProps {
  product: productDTO;
}

const PriceProduct = ({ product }: PriceProductProps) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));
  return (
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
          onClick={handleDecrement}
        >
          <ChevronLeft />
        </Button>
        <span className="text-sm">{quantity}</span>
        <Button className="h-9 w-9" onClick={handleIncrement}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default PriceProduct;
