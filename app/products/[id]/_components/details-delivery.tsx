import { Card, CardContent } from "@/app/_components/ui/card";
import { ProductDTO } from "@/app/_data/get-products";

interface DetailsDeliveryProps {
  product: ProductDTO;
}

const DetailsDelivery = ({ product }: DetailsDeliveryProps) => {
  return (
    <Card className="border-gray-300 shadow-none ">
      <CardContent className="flex justify-around py-3">
        <div>
          <p className="text-sm text-muted-foreground">Entrega</p>
          <p className="text-sm font-semibold">
            {Number(product.restaurant.deliveryFee) === 0
              ? "Grátis"
              : `R$ ${product.restaurant.deliveryFee}`}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Tempo</p>
          <p className="text-sm font-semibold">
            {product.restaurant.deliveryTimeMinutes} min
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsDelivery;
