import React from "react";

const FeaturedImageGallery = () => {
  const data = [
    {
      imgelink: "gallery1.webp",
    },
    {
      imgelink: "gallery2.webp",
    },
    {
      imgelink: "/categorias03.jpeg",
    },
    {
      imgelink: "/fondomenu.webp",
    },
    {
      imgelink: "gallery2.webp",
    },
    {
      imgelink: "/menufondo.webp",
    },
    {
      imgelink: "gallery1.webp",
    },
    {
      imgelink: "gallery1.webp",
    },
  ];

  const [active, setActive] = React.useState(data[0].imgelink);

  return (
    <>
      <div
        className="mt-4 bg-no-repeat w-full bg-cover bg-center xl:h-[300px] 2xl:h-[370px] lg:py-8 2xl:py-36 relative text-center items-center inset-0"
        style={{ backgroundImage: "url('/abouthome.jpg')" }}
      >
        <div className="flex justify-center py-5 items-center flex-col md:pt-10 2xl:pt-0">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bebas-neue-regular">
            Galleria de Images
          </h1>
          <p className="schibsted-grotesk text-red-600 text-[14px] md:text-[18px] font-semibold">
            - Luremy Restaurante -
          </p>
        </div>
      </div>
      <div className="max-w-4xl max-md:py-5 max-md:px-5 pb-10 2xl:max-w-5xl mx-auto p-0">
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full h-64 md:h-[480px]">
            <img
              className="absolute top-0 left-0 h-full w-full object-cover" // Cambiado de object-contain a object-cover
              src={active}
              alt="featured"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
          {data.map(({ imgelink }, index) => (
            <div key={index} className="flex justify-center">
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 sm:h-24 w-full max-w-full cursor-pointer rounded-lg object-cover object-center shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                alt="gallery thumbnail"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedImageGallery;
