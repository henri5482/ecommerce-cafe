import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Historia = () => {
  return (
    <div className="flex max-md:flex-col md:py-32 gap-6 xl:justify-between items-center py-16 max-w-[1300px] mx-auto">
      <div>
        <Image
          src="/categorias02.jpg"
          alt="Imagen grande"
          width={1700}
          height={800}
          className="rounded-lg"
        />
      </div>
      <div className="flex px-4 flex-col items-center text-center md:items-start md:text-start lg:px-24">
        <div className="flex items-center mb-4 ">
          <div className="border-t-2 border-red-600 w-16 max-md:hidden mr-4"></div>{" "}
          {/* Línea horizontal */}
          <p className="text-[18px] text-red-600 font-semibold py-2 schibsted-grotesk">
            Desde 2024 Restaurante
          </p>
        </div>
        <h1 className="text-3xl  text-slate-800 text-start bebas-neue-regular sm:text-7xl font-bold mb-4">
          Visita Nuestro Restaurante
        </h1>
        <p className="text-base text-start max-md:text-center  text-gray-600 mb-6">
          Ven y visita nuestro restaurante Luromy, un lugar donde podrás disfrutar comida de casa y casera y poder comer como en casa !visitanos en avenida ejercito calle lince 124
        </p>
        <div className="flex flex-col md:flex-row lg:justify-start justify-between items-center bebas-neue-regular">
          <Link
            href="https://maps.app.goo.gl/GtfY3E8e158Frjmg9"
            className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
            aria-label="Comprar ahora"
            target="_blank"
          >
            NUESTRO Restaurante
          </Link>
          <h1 className="mt-4 md:mt-7 md:pl-10 text-3xl items-center flex">
            <span>
              <Phone size={45} className="px-2" />
            </span>
            918237837
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Historia;
