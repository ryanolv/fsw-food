import { getUniqueProduct } from "@/app/_data/get-products";
import ImageProduct from "./_components/image-product";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await getUniqueProduct(id);
  return (
    <div>
      {/* Imagem */}
      <ImageProduct product={product} />
      {/* Detalhes */}
    </div>
  );
};

export default ProductPage;
