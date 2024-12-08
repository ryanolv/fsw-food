import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { ProductDTO } from "@/app/_data/get-products";
import Link from "next/link";

interface NameProductProps {
  product: ProductDTO;
}

const NameProduct = ({ product }: NameProductProps) => {
  return (
    <div>
      <Link href={`/restaurants/${product.restaurant.id}`}>
        <div className="flex gap-1 text-xs text-muted-foreground items-center">
          <Avatar className="w-5 h-5">
            <AvatarImage src={product.restaurant.imageUrl} />
          </Avatar>
          <span>{product.restaurant.name}</span>
        </div>
      </Link>
      <h1 className="font-semibold text-xl">{product.name}</h1>
    </div>
  );
};

export default NameProduct;
