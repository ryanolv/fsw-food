import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
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
      <div>
        {/* Detalhes do restaurante o nome do produto */}
        <div>
          <div className="flex gap-1 text-xs text-muted-foreground items-center">
            <Avatar className="w-5 h-5">
              <AvatarImage src={product.restaurant.imageUrl} />
            </Avatar>
            <span>{product.restaurant.name}</span>
          </div>
          <h1 className="font-semibold text-xl">{product.name}</h1>
        </div>
        {/* Valor e quantidade do produto */}

        {/* Detalhes da entrega */}

        {/* About  */}

        {/* Produtos adicionais */}
      </div>
    </div>
  );
};

export default ProductPage;
