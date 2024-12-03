import { db } from "../_lib/prisma";
import CategoryDetails from "./category";

const Categories = async () => {
  const categories = await db.category.findMany({});
  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap px-5 no-scrollbar ">
      {categories.map((category) => (
        <CategoryDetails key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
