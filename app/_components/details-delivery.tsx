import { Card, CardContent } from "@/app/_components/ui/card";
import { RestaurantDTO } from "../_data/get-restaurants";

interface DetailsDeliveryProps {
  restaurant: RestaurantDTO;
}

const DetailsDelivery = ({ restaurant }: DetailsDeliveryProps) => {
  return (
    <Card className="border-gray-300 shadow-none ">
      <CardContent className="flex justify-around py-3">
        <div>
          <p className="text-sm text-muted-foreground">Entrega</p>
          <p className="text-sm font-semibold">
            {Number(restaurant.deliveryFee) === 0
              ? "Grátis"
              : `R$ ${restaurant.deliveryFee}`}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Tempo</p>
          <p className="text-sm font-semibold">
            {restaurant.deliveryTimeMinutes} min
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsDelivery;
