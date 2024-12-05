import {
  getEspecificProducts,
  getUniqueProduct,
} from "@/app/_data/get-products";
import ImageProduct from "./_components/image-product";
import DetailsProduct from "./_components/details-product";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await getUniqueProduct(id);
  const aditionalProducts = await getEspecificProducts(
    product.restaurant.id,
    "Sucos",
  );
  return (
    <div>
      <ImageProduct product={product} />
      <DetailsProduct product={product} aditionalProducts={aditionalProducts} />
    </div>
  );
};

export default ProductPage;
