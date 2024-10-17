'use client'; // Marca este archivo como componente del cliente

import Image from 'next/image';
import React from 'react';
import { Autoplay } from 'swiper/modules'; // Quitamos la importación de Navigation
import { Swiper, SwiperSlide } from 'swiper/react';
// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  {
    src: '/ayacucho.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/ayacucho.webp' // Enlace agregado
  },
  {
    src: '/fondohome.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/fondohome.webp' // Enlace agregado
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/appeteaser-blatter' // Enlace agregado
  },
  {
    src: '/menufondo.webp ',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/appeteaser-blatter' // Enlace agregado
  },
  {
    src: '/categorias01.jpg',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/appeteaser-blatter' // Enlace agregado
  },
  {
    src: '/slider-image.jpg',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/appeteaser-blatter' // Enlace agregado
  },
  {
    src: '/fondomenu.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/appeteaser-blatter' // Enlace agregado
  },
  {
    src: '/gallery2.webp',
    width: 1450,
    height: 967,
    title: 'Appeteaser blatter',
    link: '/appeteaser-blatter' // Enlace agregado
  }
];

const ImageCarousel: React.FC = () => {
  return (
    <div className='py-20 bg-slate-50'>
      <div className='flex flex-col items-center justify-center py-4 '>
        <p className='text-[17px] text-red-600 schibsted-grotesk font-semibold py-2'>- Redes sociales -</p>
        <h1 className='text-6xl bebas-neue-regular '>Redes sociales</h1>
      </div>
      <section className="relative w-full mx-auto my-8 px-4 overflow-hidden">
        <Swiper
          modules={[Autoplay]} // Quitamos Navigation
          spaceBetween={5} // Espacio reducido entre imágenes
          slidesPerView={1} // Mostrar una imagen a la vez por defecto
          loop={true} // Hacer el carrusel cíclico
          autoplay={{ delay: 2000, disableOnInteraction: false }} 
          pagination={{ clickable: true }}
          speed={2000} // Ajuste la velocidad de la transición
          breakpoints={{
            640: {
              slidesPerView: 1, // Mostrar una imagen a la vez en pantallas pequeñas
              spaceBetween: 5
            },
            768: {
              slidesPerView: 2, // Mostrar dos imágenes a la vez en pantallas medianas
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 4, // Mostrar tres imágenes a la vez en pantallas grandes
              spaceBetween: 15,
              width: 1700,
            },
            1600:{
              slidesPerView: 5, // Mostrar tres imágenes a la vez en pantallas grandes
              spaceBetween: 15,
              width: 2100,
            }
          }}
          className="mySwiper"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link}> {/* Enlace añadido */}
                <div className="relative w-full lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 mx-auto">
                  <Image
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    width={item.width}
                    height={item.height}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .mySwiper {
            width: 100%;
            height: auto;
          }
          .swiper-wrapper {
            display: flex;
            transition-timing-function: ease-in-out; /* Cambia la transición para hacerla más suave */
          }
          .swiper-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .swiper-pagination-bullet {
            background-color: #ffffff;
          }
          .swiper-pagination-bullet-active {
            background-color: #007bff;
          }
        `}</style>
      </section>
    </div>
  );
};

export default ImageCarousel;
