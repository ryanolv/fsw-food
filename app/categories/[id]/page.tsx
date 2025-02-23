import Header from "@/app/_components/header";
import ProductItem from "@/app/_components/product-item";
import { getCategory } from "@/app/_data/get-category";
import { getProductsByCategory } from "@/app/_data/get-products";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

const CategoryPage = async ({ params: { id } }: CategoryPageProps) => {
  const products = await getProductsByCategory(id);
  const category = await getCategory(id);
  return (
    <>
      <Header />
      <div className="p-5 space-y-6">
        <h1 className="font-semibold text-lg">{category?.name}</h1>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
