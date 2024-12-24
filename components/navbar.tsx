"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ItemsMenuMobile from "./items-menu-mobile";
import MenuList from "./menu-list";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0  left-0 right-0 z-50 flex items-center justify-around p-4 mx-auto cursor-pointer transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black  shadow-md"
          : "bg-transparent text-black"
      }`}
    >
      <h1
        className={`text-2xl ${isScrolled ? "text-black" : "text-black"}`}
        onClick={() => router.push("/")}
      >
        <Image
          src="/logoluromy.png"
          alt=""
          width={300}
          height={100}
          className="max-sm:w-[220px] "
        />
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList isScrolled={isScrolled} />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
