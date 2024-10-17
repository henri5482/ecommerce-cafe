"use client"; // Asegúrate de que sea un componente del lado del cliente
import { data, Producto } from '@/data/menuData'; // Importa tus datos
import Products from './components/products';
import InfoProduct from './components/text';

// Función para obtener un producto según su slug
const getProductBySlug = (slug: string): Producto | undefined => {
  for (const category in data) {
    const product = data[category as keyof typeof data].find(
      (item) => item.slug === slug
    );
    if (product) return product;
  }
};

// Componente que renderiza los detalles del producto
const ProductDetails = ({ params }: { params: { productSlug: string } }) => {
  const product = getProductBySlug(params.productSlug); // Obtiene el producto usando el slug

  if (!product) {
    return <p>Producto no encontrado</p>; // Manejo de caso en que el producto no se encuentra
  }

  return (
    <div className="max-w-[1500px] py-32 mx-auto sm:py-48 sm:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          {/* Pasando el producto correctamente al componente Products */}
          <Products product={product} />
        </div>
        <div className="sm:px-12">
          {/* Cambiado: Asegurarse de que el producto tenga atributos antes de renderizar InfoProduct */}
            <InfoProduct product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
