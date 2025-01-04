import { getCategories } from "../_data/get-category";
import CategoryDetails from "./category";

const Categories = async () => {
  const categories = await getCategories();
  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap px-5 no-scrollbar ">
      {categories.map((category) => (
        <CategoryDetails key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
