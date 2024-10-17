/* eslint-disable @next/next/no-img-element */
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Producto } from "@/data/menuData";
  
  // Componente que renderiza el carrusel de imágenes del producto
  const Products = ({ product }: { product: Producto }) => {
    // Verifica si el producto tiene imágenes
    if (!product.imagenes || product.imagenes.length === 0) {
      return <p>No images available</p>;
    }
  
    return (
      <div className="relative sm:px-16 px-4">
        <Carousel>
          <CarouselContent>
            {product.imagenes.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagen de ${product.nombre}`}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:left-4 z-10" />
          <CarouselNext className="hidden sm:flex sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-4 z-10" />
        </Carousel>
      </div>
    );
  };
  
  export default Products;
  