import { getEspecificRestaurant } from "@/app/_data/get-restaurants";
import ImageRestaurant from "./_components/image-restaurant";
import DetailsRestaurant from "./_components/details-restaurant";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await getEspecificRestaurant(id);
  return (
    <div>
      <ImageRestaurant restaurant={restaurant} />
      <DetailsRestaurant restaurant={restaurant} />
    </div>
  );
};

export default RestaurantPage;
