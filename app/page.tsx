import Categories from "./_components/categories";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <div className="space-y-5">
      <Header />
      <Search />
      <Categories />
    </div>
  );
}
