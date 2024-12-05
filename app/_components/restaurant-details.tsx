"use client";

import Image from "next/image";
import { RestaurantDTO } from "../_data/get-restaurants";
import { Badge } from "./ui/badge";
import { HeartIcon, StarIcon } from "lucide-react";
import { formatPrice } from "../_helpers/prices";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

interface RestaurantDetailsProps {
  restaurant: RestaurantDTO;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link className="min-w-[266px]" href={`/restaurants/${restaurant.id}`}>
      <div>
        <div className="relative min-h-[150px]">
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            fill
            className="rounded-xl object-cover"
          />
          <Badge variant="secondary" className="absolute top-2 left-2 gap-1">
            <StarIcon size={16} color="#FFB100" fill="#FFB100" />
            5.0
          </Badge>
          <Button
            className={`absolute top-2 right-2 rounded-full h-7 w-7  ${isFavorite ? "bg-primary" : "bg-white/20"}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <HeartIcon size={16} fill="white" />
          </Button>
        </div>
        <div>
          <h2 className="font-semibold text-sm">{restaurant.name}</h2>
          <div className="flex gap-5">
            <p className="text-xs flex gap-1 text-muted-foreground">
              <Image src="/motoboy.svg" alt="Motoboy" width={14} height={11} />
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega Grátis"
                : formatPrice(Number(restaurant.deliveryFee))}
            </p>
            <p className="text-xs flex gap-1 text-muted-foreground">
              <Image src="/timer.svg" alt="Timer" width={14} height={11} />
              {restaurant.deliveryTimeMinutes} min
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantDetails;
