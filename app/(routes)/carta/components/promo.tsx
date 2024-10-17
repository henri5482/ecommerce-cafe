'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Promo = () => {
  const Promos = [
    {
      image: "promo1.webp",
      title: "Delicious Desserts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "promo2.webp",
      title: "Delicious Desserts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "promo3.webp",
      title: "Delicious Desserts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "promo4.webp",
      title: "Fantastic Atmosphere",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  return (
    <div className="relative max-w-[1300px] 2xl:max-w-[1450px] lg:pb-40 mx-auto 2xl:pb-44 px-4 md:px-8 lg:px-12"> 
      <Carousel className="w-full">
        <CarouselContent>
          {Promos.map((promo, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col lg:flex-row gap-6 xl:justify-between items-center">
                <div className="w-full lg:w-2/3 h-full">
                  <Image
                    src={`/${promo.image}`}
                    alt={promo.title}
                    width={1100}
                    height={800}
                    className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  />
                </div>
                <div className="flex px-4 flex-col items-center text-center md:items-start md:text-start lg:px-12">
                  <div className="flex items-center mb-4">
                    <div className="border-t-2 border-orange-600 w-16 mr-4 max-md:hidden "></div>
                    <p className="text-[18px] text-orange-600 font-semibold py-2 schibsted-grotesk">
                    Desde 2024 Restaurante
                    </p>
                  </div>
                  <h1 className="text-3xl max-md:text-center  text-slate-800 text-start bebas-neue-regular sm:text-5xl font-bold mb-4">
                    {promo.title}
                  </h1>
                  <p className="text-base max-md:text-center text-start text-gray-600 mb-6 max-md:mb-0">
                    {promo.description}
                  </p>
                  <div className="flex flex-col md:flex-row lg:justify-start justify-between items-center bebas-neue-regular">
                    <Link
                      href="/allproducts"
                      className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                      aria-label="Comprar ahora"
                    >
                      Pedir Promocion
                    </Link>
                    <h1 className="mt-4 md:mt-7 md:pl-10 text-3xl items-center flex">
                      <span>
                        <Phone size={45} className="px-2" />
                      </span>
                      930134000
                    </h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex absolute inset-y-0 left-0 items-center">
          <CarouselPrevious className="text-white bg-black/50 hover:bg-black/75 transition-all duration-300 p-2 rounded-full" />
        </div>
        <div className="hidden md:flex absolute inset-y-0 right-0 items-center">
          <CarouselNext className="text-white bg-black/50 hover:bg-black/75 transition-all duration-300 p-2 rounded-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Promo;
