import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

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
  {
    id: 4,
    name: "Local",
    link: "https://maps.app.goo.gl/GtfY3E8e158Frjmg9",
  },
  {
    id: 5,
    name: "Política de privacidad",
    link: "/politica-de-privacidad",  // Cambia a una URL amigable para SEO
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="xl:w-[1300px] md:w-auto text-slate-800 max-md:flex-col flex justify-between mx-auto md:py-4">
        <div className="flex gap-4 text-center max-md:flex-col items-center justify-center">
          <h1>
            <Image
              src="/logoluromy.png"
              alt="Logo de Luromy Menús - Restaurante"
              width={250}
              height={100}
              className=""
            />
          </h1>
          {dataFooter.map((data) => (
            <div key={data.id}>
              <Link href={data.link} className="hover:underline mt-2">
                <div className="text-[16px] font-bold text-gray-700 dark:text-gray-300">
                  {data.name}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex max-md:flex-col py-4 gap-4 sm:py-0 justify-between items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2024 Luromy Menús. Todos los derechos reservados.
          </span>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100085413237919"
              className="text-2xl text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/luromymenus"
              className="text-2xl text-pink-600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-2xl text-black dark:text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </Link>
            <Link
              href="https://wa.me/51918237837" // Cambia este número por tu número de WhatsApp
              className="text-2xl text-green-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
