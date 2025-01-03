import { ChevronRight } from "lucide-react";
import { getProducts } from "../_data/get-products";
import ProductItem from "./product-item";
import { Button } from "./ui/button";
import Link from "next/link";

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between font-semibold pl-5">
        <h2>Pedidos Recomendados</h2>
        <Button
          variant="ghost"
          className="text-xs text-primary gap-[1px] h-fit py-0"
          asChild
        >
          <Link href="/products">
            Ver todos
            <ChevronRight size={16} />
          </Link>
        </Button>
      </div>
      <div className="flex gap-2 no-scrollbar overflow-x-auto pl-5">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
