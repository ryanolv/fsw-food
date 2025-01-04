import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { getRestaurants } from "../_data/get-restaurants";
import RestaurantItem from "./restaurant-item";
import Link from "next/link";

const RestaurantsList = async () => {
  const restaurants = await getRestaurants();
  console.log(restaurants);
  return (
    <div className="space-y-3 pb-5">
      <div className="flex items-center justify-between font-semibold pl-5">
        <h2>Restaurantes Recomendados</h2>
        <Button
          variant="ghost"
          className="text-xs text-primary gap-[1px] h-fit py-0"
          asChild
        >
          <Link href="/restaurants">
            Ver todos
            <ChevronRight size={16} />
          </Link>
        </Button>
      </div>
      <div className="flex gap-2 no-scrollbar overflow-x-auto pl-5">
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
