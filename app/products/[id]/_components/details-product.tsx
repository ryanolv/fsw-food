import ProductDetails from "@/app/_components/product-details";
import { productDTO } from "@/app/_data/get-products";
import DetailsDelivery from "./details-delivery";
import PriceProduct from "./price-product";
import NameProduct from "./name-product";

interface ProductDetailsProps {
  product: productDTO;
  aditionalProducts: productDTO[];
}

const DetailsProduct = ({
  product,
  aditionalProducts,
}: ProductDetailsProps) => {
  return (
    <div className="p-5 space-y-5 bg-white">
      <NameProduct product={product} />
      <PriceProduct product={product} />
      <DetailsDelivery product={product} />
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
    </div>
  );
};

export default DetailsProduct;
