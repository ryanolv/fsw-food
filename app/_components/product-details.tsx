import Image from "next/image";
import { productDTO } from "../_data/get-products";
import { Badge } from "./ui/badge";
import { calculateFinalPrice, formatPrice } from "../_helpers/prices";
import Link from "next/link";

interface ProductDetailsProps {
  product: productDTO;
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
            <Badge className="absolute top-2 right-2 ">
              {product.discountPercentage}% OFF
            </Badge>
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
          <p className="text-xs text-muted-foreground">{product.restaurant}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductDetails;
