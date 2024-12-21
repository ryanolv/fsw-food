"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  HeartIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";

const Header = () => {
  const { data, status } = useSession();
  const user = data?.user;
  const pathname = usePathname();
  return (
    <div className="flex justify-between px-5 pt-6">
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={100} height={30} />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[85%]">
          <SheetHeader className="text-left">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {status === "authenticated" ? (
            <div className="flex gap-3 my-6 items-center">
              <Avatar className="w-12 h-12">
                <AvatarImage src={user?.image as string} />
                <AvatarFallback>
                  {data.user?.name?.split(" ")[0][0]}
                  {data.user?.name?.split(" ")[1][0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-sm">{user?.name}</h2>
                <p className="text-muted-foreground text-xs">{user?.email}</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center my-6  justify-between">
              <h2 className="font-semibold">Realize o seu login</h2>
              <Button size="icon" onClick={() => signIn()}>
                <LogInIcon />
              </Button>
            </div>
          )}

          <Separator />

          <div className={`flex flex-col justify-start my-6 `}>
            <Button
              variant="ghost"
              className={`flex justify-start ${pathname === "/" ? "bg-primary text-white" : ""}`}
              asChild
            >
              <Link href="/">
                <HomeIcon />
                Início
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`flex justify-start ${pathname === "/orders" ? "bg-primary text-white" : ""}`}
              asChild
            >
              <Link href="/orders">
                <ScrollText />
                Meus Pedidos
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`flex justify-start ${pathname === "/favorites" ? "bg-primary text-white" : ""}`}
            >
              <HeartIcon />
              Restaurantes Favoritos
            </Button>
          </div>

          <Separator />

          {status === "authenticated" && (
            <div>
              <Button
                variant="ghost"
                className="flex justify-start w-full"
                onClick={() => signOut()}
              >
                <LogOutIcon />
                Sair da conta
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
