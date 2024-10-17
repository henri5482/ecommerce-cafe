import Image from "next/image";

const Eventos = () => {
  return (
    <div className="px-4 sm:px-10 py-16 lg:py-32">
      <div className="text-center py-16">
        <p className="text-[16px] schibsted-grotesk text-red-600 py-2 font-semibold">- Servicos que hacemos -</p>
        <h1 className="text-4xl sm:text-6xl bebas-neue-regular text-slate-800">Servicos que hacemos</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center text-center gap-5 rounded-xl max-w-[1300px] mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src="/categorias01.jpg"
            alt="Imagen grande"
            width={900}
            height={800}
            layout="responsive"
            className="rounded-xl"
          />
          <h1 className="text-2xl bebas-neue-regular text-slate-800 mt-4">Comida para eventos</h1>
          <p className="text-sm schibsted-grotesk text-slate-600 font-semibold">preparamos comida en masa para eventos</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/categorias01.jpg"
            alt="Imagen grande"
            width={600}
            height={800}
            layout="responsive"
            className="rounded-xl"
          />
        <h1 className="text-2xl bebas-neue-regular text-slate-800 mt-4">Comida para eventos</h1>
          <p className="text-sm schibsted-grotesk text-slate-600 font-semibold">preparamos comida en masa para eventos</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/categorias01.jpg"
            alt="Imagen grande"
            width={600}
            height={800}
            layout="responsive"
            className="rounded-xl"
          />
         <h1 className="text-2xl bebas-neue-regular text-slate-800 mt-4">Comida para eventos</h1>
          <p className="text-sm schibsted-grotesk text-slate-600 font-semibold">preparamos comida en masa para eventos</p>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
