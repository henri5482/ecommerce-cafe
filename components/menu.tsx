"use client";

import { data, MenuData, Producto } from "@/data/menuData";
import { Coffee, IceCreamBowl } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdRestaurantMenu } from "react-icons/md";
import { RiDrinksLine } from "react-icons/ri";
import { TbSoup } from "react-icons/tb";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof MenuData>("bebidas");

  const handleCategoryClick = (category: keyof MenuData) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div
        className=" xl:px-40 2xl:px-56 dark:bg-slate-50 bg-cover bg-center relative items-center py-28 inset-0 bg-slate-100 bg-opacity-50"
      >
        <div className="flex flex-col items-center px-2">
          <p className="text-[20px] font-semibold text-orange-600 py-4">
          - Luromy -
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bebas-neue-regular text-slate-800">
             Nuestra Carta
          </h1>
          <div className="flex flex-wrap justify-center space-x-4 mb-8 gap-4 md:gap-16 py-8 text-[14px] items-center">
            <button
              onClick={() => handleCategoryClick("menu")}
              className={`cursor-pointer flex flex-col items-center transition-transform transform ${
                selectedCategory === "menu"
                  ? "scale-110 text-orange-300"
                  : "hover:scale-110 hover:text-orange-300"
              }`}
            >
              <TbSoup
                size={40}
                className="transition-transform duration-300 hover:scale-125"
              />
              <p className="mt-2">carta</p>
            </button>
            <button
              onClick={() => handleCategoryClick("productos")}
              className={`cursor-pointer flex flex-col items-center transition-transform transform ${
                selectedCategory === "productos"
                  ? "scale-110 text-orange-300"
                  : "hover:scale-110 hover:text-orange-300"
              }`}
            >
              <RiDrinksLine
                size={40}
                className="transition-transform duration-300 hover:scale-125"
              />
              <p className="mt-2">jugos</p>
            </button>
            <button
              onClick={() => handleCategoryClick("jugos")}
              className={`cursor-pointer flex flex-col items-center transition-transform transform ${
                selectedCategory === "jugos"
                  ? "scale-110 text-orange-300"
                  : "hover:scale-110 hover:text-orange-300"
              }`}
            >
              <IceCreamBowl
                size={40}
                className="transition-transform duration-300 hover:scale-125"
              />
              <p className="mt-2">helados</p>
            </button>
            <button
              onClick={() => handleCategoryClick("postres")}
              className={`cursor-pointer flex flex-col items-center transition-transform transform ${
                selectedCategory === "postres"
                  ? "scale-110 text-orange-300"
                  : "hover:scale-110 hover:text-orange-300"
              }`}
            >
              <Coffee
                size={40}
                className="transition-transform duration-300 hover:scale-125"
              />
              <p className="mt-2">cafe</p>
            </button>
            <button
              onClick={() => handleCategoryClick("bebidas")}
              className={`cursor-pointer flex flex-col items-center transition-transform transform ${
                selectedCategory === "bebidas"
                  ? "scale-110 text-orange-300"
                  : "hover:scale-110 hover:text-orange-300"
              }`}
            >
              <MdRestaurantMenu
                size={40}
                className="transition-transform duration-300 hover:scale-125"
              />
              <p className="mt-2">menu</p>
            </button>
          </div>
        </div>
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
          {data[selectedCategory].map((item: Producto, index: number) => (
            <li key={item.nombre + index}>
              <Link href={`/menu/${item.slug}`}>
                <div className="flex items-start justify-between gap-3 md:gap-6 p-1 md:p-6 rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
                  <figure className="flex-shrink-0">
                    <Image
                      src={item.imagen}
                      width={100}
                      height={100}
                      loading="lazy"
                      alt={item.nombre}
                      className="w-28 h-28 object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                    />
                  </figure>
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-xl  text-gray-800 relative schibsted-grotesk font-semibold">
                        {item.nombre}
                        <span className="absolute left-0 bottom-0 h-0.5 bg-gray-300 w-full transition-all duration-300 transform scale-x-0 hover:scale-x-100"></span>
                      </h3>
                      <div className="flex-grow border-b border-dotted border-slate-800 mx-2" />
                      <p className="font-semibold text-lg text-gray-800 schibsted-grotesk ">
                        S/{item.precio.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 schibsted-grotesk font-semibold">{item.descripcion}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex px-2 flex-col text-center items-center justify-center py-20 bebas-neue-regular">
          <h1 className="text-2xl md:text-4xl">
            Estamos abiertos de lunes a viernes, de{" "}
            <span className="text-orange-300"> 7:00 pm</span> a{" "}
            <span className="text-orange-300"> 9:00 pm</span>
          </h1>
          <Link
            href="/allproducts"
            className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
            aria-label="Comprar ahora"
          >
            ver todo el menú
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default Menu;
