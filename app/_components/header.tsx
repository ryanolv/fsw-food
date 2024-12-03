import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/Logo.png" alt="Logo" width={100} height={30} />
      <Button variant="ghost">
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
