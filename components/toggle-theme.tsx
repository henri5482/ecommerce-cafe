"use client";

import Link from "next/link";

const ToggleTheme = () => {

  return (
    <div className="hidden lg:block">
  <Link
    href="/carta"
    className="lg:text-lg md:text-[18px] px-4 py-2 flex justify-center items-center bg-slate-800 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
    aria-label="Comprar ahora"
  >
     Ordena Ya
  </Link>
</div>
  );
};

export default ToggleTheme;
