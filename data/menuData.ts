export type Producto = {
  imagen: string;
  nombre: string;
  descripcion: string;
  precio: number;
  slug: string;
  imagenes?: string[]; // Añadido campo para múltiples imágenes opcionales
};

export type MenuData = {
  bebidas: Producto[];
  jugos: Producto[];
  menu: Producto[];
  postres: Producto[];
  productos: Producto[];
};

export const data: MenuData = {
  bebidas: [
    {
      imagen: "/categorias01.jpg",
      nombre: "Soda",
      descripcion: "Refrescante bebida carbonatada.",
      precio: 2.0,
      slug: "soda",
      imagenes: ["/categorias01.jpg", "/categorias02.jpg"], // Ejemplo con múltiples imágenes
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    
  ],
  jugos: [
    {
      imagen: "/categorias03.jpeg",
      nombre: "Jugo de Naranja",
      descripcion: "Refrescante jugo de naranjas frescas.",
      precio: 3.5,
      slug: "jugo-de-naranja",
      imagenes: ["/categorias03.jpeg"],
    },
    // ...otros productos
  ],
  menu: [
    {
      imagen: "/categorias01.jpg",
      nombre: "Plato Principal A",
      descripcion: "Delicioso plato principal preparado con ingredientes frescos.",
      precio: 15.0,
      slug: "plato-principal-a",
      imagenes: ["/categorias01.jpg", "/categorias02.jpg"],
    },
    // ...otros productos
  ],
  postres: [
    {
      imagen: "/categorias01.jpg",
      nombre: "Soda",
      descripcion: "Refrescante bebida carbonatada.",
      precio: 2.0,
      slug: "soda",
      imagenes: ["/categorias01.jpg", "/categorias02.jpg"],
    },
    {
      imagen: "/categorias01.jpg",
      nombre: "Soda",
      descripcion: "Refrescante bebida carbonatada.",
      precio: 2.0,
      slug: "soda",
      imagenes: ["/categorias01.jpg", "/categorias02.jpg"],
    },
    {
      imagen: "/categorias03.jpeg",
      nombre: "Tarta de Chocolate",
      descripcion: "Deliciosa tarta de chocolate con crema.",
      precio: 5.0,
      slug: "tarta-de-chocolate",
      imagenes: ["/categorias03.jpeg", "/categorias02.jpg"],
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    {
      imagen: "/categorias01.jpg",
      nombre: "Plato Principal A",
      descripcion: "Delicioso plato principal preparado con ingredientes frescos.",
      precio: 15.0,
      slug: "plato-principal-a",
      imagenes: ["/categorias01.jpg", "/categorias02.jpg"],
    },
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    // ...otros productos
  ],
  productos: [
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto A",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    // ...otros productos
  ],
};
