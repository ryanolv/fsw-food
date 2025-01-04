import ProductItem from "@/app/_components/product-item";
import { ProductDTO } from "@/app/_data/get-products";

interface ExtraProductsProps {
  aditionalProducts: ProductDTO[];
}

const ExtraProducts = ({ aditionalProducts }: ExtraProductsProps) => {
  return (
    <div>
      <h3 className="font-semibold">Sucos</h3>
      <div className="flex gap-2 no-scrollbar overflow-x-auto pl-5">
        {aditionalProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ExtraProducts;
