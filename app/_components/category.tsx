import { Category } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CategoryDetailsProps {
  category: Category;
}

const CategoryDetails = ({ category }: CategoryDetailsProps) => {
  return (
    <Button
      variant="ghost"
      className="min-w-40 shadow-md h-11 bg-white rounded-full flex gap-1 justify-center items-center"
      asChild
    >
      <Link href={`/categories/${category.id}`}>
        <Image
          src={category.imageUrl}
          alt={category.name}
          height={25}
          width={25}
        />
        <p className="font-semibold text-sm ">{category.name}</p>
      </Link>
    </Button>
  );
};

export default CategoryDetails;
