"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface MenuListProps {
  isScrolled: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ isScrolled }) => {
  return (
    <NavigationMenu className="flex text-[25px]  bebas-neue-regular items-center justify-between">
      <NavigationMenuList className="flex items-center justify-between gap-8">
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                isScrolled
                  ? "text-black hover:text-orange-400"
                  : "text-white hover:text-orange-400"
              }
            >
              Incio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/carta" legacyBehavior passHref>
            <NavigationMenuLink
              className={
                isScrolled
                  ? "text-black hover:text-orange-400"
                  : "text-white hover:text-orange-400"
              }
            >
              Menu
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
          <NavigationMenuLink
              className={
                isScrolled
                  ? "text-black hover:text-orange-400"
                  : "text-white hover:text-orange-400"
              }
            >
              {" "}
              Servicios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/gallery" legacyBehavior passHref>
          <NavigationMenuLink
              className={
                isScrolled
                  ? "text-black hover:text-orange-400"
                  : "text-white hover:text-orange-400"
              }
            >
              Galeria
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <Link href="/delivery" legacyBehavior passHref>
          <NavigationMenuLink
              className={
                isScrolled
                  ? "text-black hover:text-orange-400"
                  : "text-white hover:text-orange-400"
              }
            >
              Delivery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="https://maps.app.goo.gl/GtfY3E8e158Frjmg9" legacyBehavior passHref >
          <NavigationMenuLink target="_blank"
              className={
                isScrolled
                  ? "text-black hover:text-orange-400"
                  : "text-white hover:text-orange-400"
              }
            >
              Local
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuList;
