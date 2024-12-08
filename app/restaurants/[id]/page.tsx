import { getEspecificRestaurant } from "@/app/_data/get-restaurants";
import ImageRestaurant from "./_components/image-restaurant";
import DetailsRestaurant from "./_components/details-restaurant";
import CartSummary from "./_components/cart-summary";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await getEspecificRestaurant(id);
  return (
    <>
      <ImageRestaurant restaurant={restaurant} />
      <DetailsRestaurant restaurant={restaurant} />
      <CartSummary restaurant={restaurant} />
    </>
  );
};

export default RestaurantPage;
