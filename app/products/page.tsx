import Header from "../_components/header";
import ProductItem from "../_components/product-item";
import { getProducts } from "../_data/get-products";

const RecommendedProductsPage = async () => {
  const products = await getProducts(24);
  return (
    <>
      <Header />
      <div className="p-5 space-y-6">
        <h1 className="font-semibold text-lg">Pedidos Recomendados</h1>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedProductsPage;
