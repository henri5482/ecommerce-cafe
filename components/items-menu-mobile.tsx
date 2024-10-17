import { Menu } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger
        aria-label="Open menu"  // Agregado para accesibilidad
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"  // Estilos adicionales
      >
        <Menu size={24} />
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4">
      <Link href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
        Inicio
        </Link>
        <Link href="/carta" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
        Menu
        </Link>
        <Link href="/about" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
        Nosotros
        </Link>
        <Link href="/gallery" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
        Galeria
        </Link>
        <Link href="/delivery" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
          Delivery
        </Link>
        <Link href="https://maps.app.goo.gl/r2azEc8ZCEoNHAbcA" legacyBehavior passHref>
      <a className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md" target="_blank" rel="noopener noreferrer">
        Local
      </a>
    </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
