import { Badge } from "./ui/badge";

interface DiscountBadgeProps {
  product: {
    discountPercentage: number;
  };
  isAbsolute?: boolean;
}

const DiscountBadge = ({
  product: { discountPercentage },
  isAbsolute = false,
}: DiscountBadgeProps) => {
  return (
    <Badge className={`${isAbsolute ? "absolute top-2 right-2 " : ""}`}>
      {discountPercentage}% OFF
    </Badge>
  );
};

export default DiscountBadge;
