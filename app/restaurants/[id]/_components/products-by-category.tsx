import ProductItem from "@/app/_components/product-item";
import { getEspecificProducts } from "@/app/_data/get-products";
import { Category } from "@prisma/client";

interface ProductsByCategoryProps {
  category: Category;
  restaurantId: string;
}

const ProductsByCategory = async ({
  category,
  restaurantId,
}: ProductsByCategoryProps) => {
  const products = await getEspecificProducts(restaurantId, category.name);
  return (
    <div>
      <h2 className="font-semibold">{category.name}</h2>
      <div className="flex gap-2 no-scrollbar overflow-x-auto ">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
