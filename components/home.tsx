"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomeBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const items = [
    {
      name: "RESTAURANTE",
      description: "LUROMY",
      imageUrl: "/ayacucho.webp",
    },
    {
      name: "CAFETERÍA",
      description: "LUROMY",
      imageUrl: "/fondohome.webp", // Cambié la segunda imagen para la demostración
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative h-screen overflow-hidden bebas-neue-regular">
      <AnimatePresence>
        {items.map(
          (item, index) =>
            current === index && (
              <motion.div
                key={index}
                className="absolute w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-0 flex justify-center items-center">
                  <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[700px] xl:h-[700px] border-radius-full overflow-hidden mx-auto">
                    <motion.div
                      className="absolute inset-0 p-2 rounded-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-2">
                      <motion.p
                        className="schibsted-grotesk text-red-600 text-[14px] md:text-[18px] font-semibold"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                      ></motion.p>
                      <motion.h2
                        className="text-7xl md:text-9xl xl:text-[10rem] pt-4 "
                        key={current}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        {item.name}
                      </motion.h2>
                      <motion.p
                        className="text-md text-7xl md:text-9xl xl:text-[10rem]"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                          delay: 0.6,
                        }}
                      >
                        {item.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          delay: 0.8,
                        }}
                        className="mt-6 "
                      >
                        <div className="flex justify-center items-center gap-4 max-sm:flex-col">
                          <Link
                            href="#"
                            className=" text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                            aria-label="Comprar ahora"
                          >
                            NUESTRA CARTA{" "}
                            <MoveRight className="px-1" size={30} />
                          </Link>
                          <Link
                            href="https://www.google.com/maps/place/13%C2%B009'07.7%22S+74%C2%B012'25.9%22W/@-13.152139,-74.207204,884m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-13.152139!4d-74.207204?entry=ttu"
                            className=" text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
                            aria-label="Comprar ahora"
                            target="_blank"
                          >
                            NUESTRO LOCAL{" "}
                            <MoveRight className="px-1" size={30} />
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeBanner;
