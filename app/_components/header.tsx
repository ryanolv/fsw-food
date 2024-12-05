import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={100} height={30} />
      </Link>
      <Button variant="ghost">
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
