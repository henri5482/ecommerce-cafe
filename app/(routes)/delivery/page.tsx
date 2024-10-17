/* eslint-disable @next/next/no-img-element */
"use client"; // Agrega esta línea al principio del archivo

import Link from "next/link";
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";
import MapComponent from "./components/mapa";

type OpeningTime = {
  day: string;
  hours: string;
};

const openingTimes: OpeningTime[] = [
  { day: "Monday", hours: "12:00pm - 10:00pm" },
  { day: "Tuesday", hours: "12:00pm - 10:00pm" },
  { day: "Wednesday", hours: "12:00pm - 10:00pm" },
  { day: "Thursday", hours: "12:00pm - 10:00pm" },
  { day: "Friday", hours: "12:00pm - 10:00pm" },
  { day: "Saturday", hours: "12:00pm - 10:00pm" },
  { day: "Sunday", hours: "12:00pm - 9:00pm" },
];

export default function Page() {
  const menuItems = [
    {
      title: " MENU",
      image: "menu.webp",
      href: "/",
    },
    {
      title: "NOSOTROS",
      image: "gallery2.webp",
      href: "/",
    },
    {
      title: "GALERIA",
      image: "homepatron.webp",
      href: "/",
    },
    {
      title: "REDES SOCIALES",
      image: "/redesociales.webp",
      href: "/redesociales.webp",
    },
  ];
  return (
    <div>
      <div className="flex flex-col px-4 text-center items-center justify-center lg:max-w-[1000px] mx-auto py-32">
        <h1 className=" md:text-8xl text-5xl text-slate-800 bebas-neue-regular">
          Delivery
        </h1>
        <p className="schibsted-grotesk text-orange-600 text-[14px] pb-6 md:text-[18px] font-semibold">
          - Luremy Restaurant -
        </p>
        <p className="md:text-[18px] text-justify font-semibold text-slate-800 schibsted-grotesk">
          Ubicado en el distrito Andrés Avelino Cáceres, Restaurante Luremy
          ofrece un servicio de delivery vibrante que lleva nuestras delicias
          culinarias a tu puerta en Colchester y sus alrededores. Reserva
          nuestro espacio para eventos especiales, con capacidad para hasta 20
          invitados y una zona privada para 5 personas. ¡Prueba nuestro delivery
          y disfruta lo mejor de Luremy en la comodidad de tu hogar!
        </p>
        <Link
          href="/carta"
          className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
          aria-label="Comprar ahora"
        >
          ver todo el menú
        </Link>
      </div>
      <div className="flex max-md:flex-col  justify-evenly   items-start mx-auto max-w-[1330px]">
        <div>
          <div className="bg-white border-8 mb-10 border-orange-600">
            <div className="text-start flex flex-col">
              <h1 className="md:text-5xl  text-4xl font-bold py-8 px-8 text-start text-slate-800 bebas-neue-regular">
                Preto, Colchester
              </h1>
              <p className="schibsted-grotesk font-bold px-8 pb-3 text-[1.7rem]">
                59 High Street <br />
                Colchester <br /> CO1 1DH
              </p>
              <p className="flex px-8 py-2 pr-3 items-center text-2xl schibsted-grotesk font-bold text-orange-600">
                <span className="pr-4">
                  <BsTelephoneInbound
                    size={25}
                    className="text-4xl text-orange-600 hover:text-slate-800"
                  />
                </span>
                info@preto.co.uk
              </p>
              <p className="flex px-8 py-2 pr-3 items-center text-2xl schibsted-grotesk font-bold text-orange-600">
                <span className="pr-4">
                  <IoMailOpenOutline
                    size={25}
                    className="text-4xl text-orange-600 hover:text-orange-400"
                  />
                </span>
                01206 574569
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="text-5xl font-bold py-8 text-start text-slate-800 bebas-neue-regular">
                Opening Times
              </h2>
              <div className="space-y-2 md:text-[18px]  schibsted-grotesk font-bold">
                {openingTimes.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-orange-600 font-medium md:pr-32">
                      {day}:
                    </span>
                    <span className="text-gray-700">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 py-8 rounded-lg shadow-md text-[18px]  schibsted-grotesk font-bold">
              <p className="text-sm text-gray-600 italic mb-4">
                *Last seating is one hour prior to closing.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  <span>Baby Facilities</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span>Group Friendly</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Wifi</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 3.5a6.5 6.5 0 00-5.288 10.292l1.794-1.794A4.5 4.5 0 1110 5.5a4.5 4.5 0 014.288 5.788l1.794 1.794A6.5 6.5 0 0010 3.5zm0 12a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-8a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                  </svg>
                  <span>Wheelchair Facilities</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Venue Hire</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold pb-6 text-start text-slate-800 bebas-neue-regular">
                Lugares con Entrega a Domicilio
              </h2>

              <div className="grid grid-cols-2 gap-4 schibsted-grotesk font-bold">
                <div className="flex items-center">
                  <span> Aeropuerto</span>
                </div>

                <div className="flex items-center">
                  <span>Cementerio</span>
                </div>

                <div className="flex items-center">
                  <span>Andres Avelino caceres</span>
                </div>

                <div className="flex items-center">
                  <span> Centro</span>
                </div>

                <div className="flex items-center">
                  <span> Carmen Alto</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border-8 gap-6 border-orange-600 h-full w-full">
            <MapComponent />
          </div>
          <div className="flex max-md:flex-col  justify-around">
            <Link
              href="/allproducts"
              className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
              aria-label="Comprar ahora"
            >
              Google Maps
            </Link>
            <Link
              href="/allproducts"
              className="mt-6 text-lg md:text-xl px-8 py-3 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
              aria-label="Comprar ahora"
            >
              Redes sociales
            </Link>
          </div>
        </div>
        <div className="text-center space-y-6 max-md:max-w-[100%] py-20  max-w-[40%]">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} passHref legacyBehavior>
                  <a
                    className="block relative rounded-lg shadow-lg overflow-hidden  border-8 border-orange-600"
                    aria-label={item.title}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className=" h-[280px] object-cover transform w-full transition duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center transition duration-300 bg-opacity-0 hover:bg-black hover:bg-opacity-50 group">
                      <h2 className="text-xl font-bold text-slate-900 text-center group-hover:text-white schibsted-grotesk">
                        {item.title}
                      </h2>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
