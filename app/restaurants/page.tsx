import Header from "@/app/_components/header";
import { getRestaurants } from "../_data/get-restaurants";
import RestaurantItem from "../_components/restaurant-item";

const RestaurantsRecommended = async () => {
  const restaurants = await getRestaurants();
  return (
    <>
      <Header />

      <div className="p-5 space-y-6">
        <h1 className="font-semibold text-lg">Restaurantes</h1>
        <div className="space-y-6">
          {restaurants.map((restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantsRecommended;
