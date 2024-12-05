import DetailsDelivery from "@/app/_components/details-delivery";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Badge } from "@/app/_components/ui/badge";
import { RestaurantDTO } from "@/app/_data/get-restaurants";
import ProductsByCategory from "@/app/restaurants/[id]/_components/products-by-category";
import { StarIcon } from "lucide-react";

interface DetailsRestaurantProps {
  restaurant: RestaurantDTO;
}

const DetailsRestaurant = ({ restaurant }: DetailsRestaurantProps) => {
  return (
    <div className="p-5 space-y-5 relative z-50 mt-[-1.5rem] rounded-tr-3xl rounded-tl-3xl bg-white ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5 font-semibold text-xl">
          <Avatar className="h-8 w-8">
            <AvatarImage src={restaurant.imageUrl} />
          </Avatar>
          <h1>{restaurant.name}</h1>
        </div>
        <Badge variant="secondary" className=" bg-[#323232] text-white gap-1">
          <StarIcon size={16} color="#FFB100" fill="#FFB100" />
          5.0
        </Badge>
      </div>
      <DetailsDelivery restaurant={restaurant} />
      <div className="space-y-6">
        {restaurant.categories!.map((category) => (
          <ProductsByCategory
            key={category.id}
            category={category}
            restaurantId={restaurant.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsRestaurant;
