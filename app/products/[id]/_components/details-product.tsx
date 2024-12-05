import ProductDetails from "@/app/_components/product-details";
import { productDTO } from "@/app/_data/get-products";
import DetailsDelivery from "@/app/_components/details-delivery";
import PriceProduct from "./price-product";
import NameProduct from "./name-product";
import { Button } from "@/app/_components/ui/button";

interface ProductDetailsProps {
  product: productDTO;
  aditionalProducts: productDTO[];
}

const DetailsProduct = ({
  product,
  aditionalProducts,
}: ProductDetailsProps) => {
  return (
    <div className="p-5 relative z-50 mt-[-1.5rem] rounded-tr-3xl rounded-tl-3xl space-y-5 bg-white">
      <NameProduct product={product} />
      <PriceProduct product={product} />
      <DetailsDelivery restaurant={product.restaurant} />
      <div>
        <h3 className="font-semibold">Sobre</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>
      <div>
        <h3 className="font-semibold">Sucos</h3>
        <div className="flex gap-2 no-scrollbar overflow-x-auto pl-5">
          {aditionalProducts.map((product) => (
            <ProductDetails key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Button className="w-full">Adicionar ao carrinho</Button>
    </div>
  );
};

export default DetailsProduct;
