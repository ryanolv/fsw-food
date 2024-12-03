import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex justify-center px-5 gap-2">
      <Input
        placeholder="Buscar restaurantes"
        className="border-none bg-[#7E8392]/5"
      />
      <Button variant="default">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
