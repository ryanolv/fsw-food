import Image from "next/image";
import { ProductDTO } from "../_data/get-products";
import { calculateFinalPrice, formatPrice } from "../_helpers/prices";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductDetailsProps {
  product: ProductDTO;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <Link className="min-w-36" href={`../products/${product.id}`}>
      <div className="w-full">
        <div className="relative min-h-[150px]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-xl object-cover"
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge product={product} isAbsolute={true} />
          )}
        </div>
        <div>
          <h2 className="text-sm truncate">{product.name}</h2>
          <div className="flex gap-1 items-center">
            <h3 className="font-semibold">
              {calculateFinalPrice(product.price, product.discountPercentage)}
            </h3>
            <h3 className="text-xs text-muted-foreground line-through">
              {formatPrice(product.price)}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductDetails;
