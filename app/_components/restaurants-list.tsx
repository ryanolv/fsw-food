import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { getRestaurants } from "../_data/get-restaurants";
import RestaurantDetails from "./restaurant-details";

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
        >
          Ver todos
          <ChevronRight size={16} />
        </Button>
      </div>
      <div className="flex gap-2 no-scrollbar overflow-x-auto pl-5">
        {restaurants.map((restaurant) => (
          <RestaurantDetails key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
