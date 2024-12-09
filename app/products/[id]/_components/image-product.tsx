"use client";

import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ImageProductProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ImageProduct = ({ product }: ImageProductProps) => {
  const router = useRouter();
  return (
    <div className="w-full h-[356px] relative">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />
      <Button
        variant="ghost"
        className="absolute top-4 left-4 rounded-full w-10 h-10 bg-white"
        onClick={() => router.back()}
      >
        <ChevronLeft size={24} className="text-black" />
      </Button>
      <Button
        variant="ghost"
        className="absolute top-4 right-4 rounded-xl w-10 h-10 bg-black/40"
        onClick={() => router.push("/")}
      >
        <X size={24} className="text-white" />
      </Button>
    </div>
  );
};

export default ImageProduct;
