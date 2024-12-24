import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
const dataFooter = [
  {
    id: 1,
    name: "Menu",
    link: "/carta",
  },
  {
    id: 2,
    name: "Servicios",
    link: "/about",
   
  },
  // {
  //   id: 3,
  //   name: "Galeria",
  //   link: "#",
  // },
  {
    id: 4,
    name: "Local",
    link: "https://maps.app.goo.gl/GtfY3E8e158Frjmg9",
    
  },
  {
    id: 4,
    name: "politica de privacidad",
    link: "#",

  },
];

const Footer = () => {
  return (
    <footer
      className=""

    >
      <div className=" xl:w-[1300px] md:w-auto text-slate-800 max-md:flex-col flex justify-between mx-auto md:py-4">
        <div className=" flex gap-4 text-center max-md:flex-col items-center justify-center">
          <h1 >
          <Image src="/logoluromy.png" alt="logo luromy" width={250} height={100} className=""/>

          </h1>
          {dataFooter.map((data) => (
            <div key={data.id} className="">
              <Link href={data.link} className="hover:underline mt-2">
                <div className="text-[16px] font-bold text-gray-700 dark:text-gray-300">
                  {data.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* <Separator className="my-6 bg-slate-800 border-slate-950 sm:mx-auto dark:border-white lg:my-4" /> */}
        <div className="flex max-md:flex-col py-4 gap-4 sm:py-0 justify-between items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2024 <Link href="#"></Link> Todos los derechos reservados.
          </span>
          <div className="flex gap-4 ">
            <a
              href="https://www.facebook.com/tu_cuenta"
              className="text-2xl text-blue-800"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/tu_cuenta"
              className="text-2xl text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@tu_cuenta"
              className="text-2xl text-black dark:text-white"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/tu_cuenta"
              className="text-2xl text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
