import { Medal, Package, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";

const Comida = () => {
  return (
    <div className="py-28 bg-slate-50">
      <div className="container mx-auto xl:w-[1300px] h-auto  md:gap-20 flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 lg:px-4 relative">
        <div className="flex-1 mb-8 lg:mb-0">
          <Image
            src="/comida.webp"
            alt="combo luromy"
            width={550}
            height={600}
            className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-1 max-w-lg mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bebas-neue-regular text-gray-800">
            ¡Combo Broaster! Pollo Crocante + Gaseosa Personal
          </h1>
          <p className="text-base md:text-lg leading-relaxed py-4 text-gray-600 schibsted-grotesk font-semibold ">
            ¡Disfruta de nuestro irresistible Combo Broaster! Un plato de pollo
            broaster crocante, acompañado de una refrescante gaseosa personal.
            Preparado con ingredientes de calidad para brindarte el
            sabor y la frescura que mereces. Haz que tu día sea especial con
            esta deliciosa combinación. ¡Ven y prueba el mejor broaster del Aeropuerto!
          </p>
          <div className="flex flex-col md:flex-row lg:justify-start justify-between items-center bebas-neue-regular">
            <Link
              href="https://wa.me/51918237837?text=quiero%20la%20promo%20broaster"
              className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
              aria-label="Promocion"
              target="_blank"
            >
              Pedir promocion
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center lg:px-20">
        <div className="flex flex-col items-center">
          <Package size={50} className="text-gray-800 mb-2" />
          <h1 className="text-xl font-bold"> Delivery</h1>
          <p className="text-gray-600">sola  zona del Aeropuerto <br /> entre 20 a 40 minutos</p>
        </div>
        <div className="flex flex-col items-center">
          <Medal size={50} className="text-gray-800 mb-2" />
          <h1 className="text-xl font-bold">Garantía de calidad</h1>
          <p className="text-gray-600">Satisfacción asegurada</p>
        </div>
        <div className="flex flex-col items-center">
          <IoBagCheckOutline size={50} className="text-gray-800 mb-2" />
          <h1 className="text-xl font-bold">Pago seguro</h1>
          <p className="text-gray-600">Transacciones 100% seguras</p>
        </div>
      </div>
    </div>
  );
};

export default Comida;
