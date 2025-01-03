import Image from "next/image";
import Categories from "./_components/categories";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import RestaurantsList from "./_components/restaurants-list";

export default function Home() {
  return (
    <div className="space-y-5">
      <Header />
      <Search />
      <Categories />
      <div className="flex justify-center">
        <Image
          src="/Banner-Pizza.png"
          alt="Banner Pizza"
          width={390}
          height={150}
        />
      </div>
      <ProductList />
      <div className="flex justify-center">
        <Image
          src="/Banner-Burguer.png"
          alt="Banner Burger"
          width={390}
          height={150}
        />
      </div>
      <RestaurantsList />
    </div>
  );
}
