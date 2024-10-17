// components/text.tsx
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Producto } from "@/data/menuData"; // Asegúrate de que Producto esté correctamente importado
import { formatPrice } from "@/lib/formatPrice";

// Componente que renderiza los detalles del producto
const InfoProduct = ({ product }: { product: Producto }) => {
  if (!product) {
    return <p>Producto no encontrado</p>; // Manejo de caso en que el producto no se encuentra
  }

  const phoneNumber = "51930134408"; // Cambia esto por el número correcto
  // Función para manejar el clic del botón
  const handleBuyClick = () => {
    const message = `Hola, estoy interesado en comprar ${product.nombre} por ${formatPrice(product.precio)}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  
  return (
    <div className="px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between mb-3">
        <h1 className="text-2xl sm:text-3xl font-semibold">{product.nombre}</h1>
      </div>
      <Separator className="my-4" />
      <p>{product.descripcion}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.precio)}</p>
      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={handleBuyClick}>Comprar</Button>
      </div>
    </div>
  );
};

export default InfoProduct;
