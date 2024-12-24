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
  desayunos: Producto[];
  productos: Producto[];
};

export const data: MenuData = {
  bebidas: [
    {
      imagen: "/que-es-mate.webp",
      nombre: "Mate de Filtro",
      descripcion: "",
      precio: 2.0,
      slug: "mate",
      imagenes: ["/que-es-mate.webp"], // Ejemplo con múltiples imágenes
    },
    {
      imagen: "/te-de-manzanilla-cuarente-a.jpg",
      nombre: "Té de Manzanilla Filtro",
      descripcion: "",
      precio: 2.0,
      slug: "manzanilla",
      imagenes: ["/te-de-manzanilla-cuarente-a.jpg"],
    },
    {
      imagen: "/V4AB6UJ3MFFLPLNXSQFEPDMWSI.webp",
      nombre: "Té de Aniz Filtro",
      descripcion: "",
      precio: 2.0,
      slug: "aniz",
      imagenes: ["/V4AB6UJ3MFFLPLNXSQFEPDMWSI.webp"],
    },
    {
      imagen: "/vence.jpg.webp",
      nombre: "Café Pasado",
      descripcion: "",
      precio: 3.0,
      slug: "cafe",
      imagenes: ["/vence.jpg.webp"],
    },
    {
      imagen: "/1366_2000.webp",
      nombre: "Café con Leche",
      descripcion: "",
      precio: 3.0,
      slug: "cafeleche",
      imagenes: ["/1366_2000.webp"],
    },
    {
      imagen: "/INKAKOLA450_V1.webp",
      nombre: "Inka Cola personal",
      descripcion: "",
      precio: 3.0,
      slug: "inkacola",
      imagenes: ["/INKAKOLA450_V1.webp", ],
    },
    {
      imagen: "/COCA-COLA-600MKL-1200X1200-1.webp",
      nombre: "Coca Cola",
      descripcion: "",
      precio: 3.0,
      slug: "cocacola",
      imagenes: ["/COCA-COLA-600MKL-1200X1200-1.webp", ],
    },
    
  ],
  jugos: [
    {
      imagen: "/PAPAYA.webp",
      nombre: "Jugo de Papaya",
      descripcion: "",
      precio: 4,
      slug: "jugo-de-naranja01",
      imagenes: ["/PAPAYA.webp"],
    },
    {
      imagen: "/platano.webp",
      nombre: "Jugo de Platano",
      descripcion: "",
      precio: 4,
      slug: "jugo-de-naranja02",
      imagenes: ["/platano.webp"],
    },
    {
      imagen: "/jugo-de-fresa-con-leche-1024x683.webp",
      nombre: "Jugo de Fresa",
      descripcion: "",
      precio: 7,
      slug: "jugo-de-naranja03",
      imagenes: ["/jugo-de-fresa-con-leche-1024x683.webp"],
    },
    {
      imagen: "/jugo_surtido_3118-reg.jpg",
      nombre: "Jugo Especial",
      descripcion: "",
      precio: 7,
      slug: "jugo-de-naranja04",
      imagenes: ["/jugo_surtido_3118-reg.jpg"],
    },
    {
      imagen: "/jugo-verde.webp",
      nombre: "Jugo Verde",
      descripcion: "",
      precio: 3.5,
      slug: "jugo-de-naranja05",
      imagenes: ["/jugo-verde.webp"],
    },
  ],
  menu: [
    {
      imagen: "/arrozchaufa.webp",
      nombre: "Arroz Chaufa",
      descripcion: "Arroz salteado con verduras + pollo + sillao" ,
      precio: 10.00,
      slug: "plato-principal-a",
      imagenes: ["/arrozchaufa.webp"],
    },
    {
      imagen: "/salchipapas.webp",
      nombre: "Salchipapa simple",
      descripcion: "Papas fritas acompañadas de salchichas ",
      precio: 6.00,
      slug: "plato-principal-01",
      imagenes: ["/salchipapas.webp"],
    },
    {
      imagen: "/tallarines-saltados-peruanos.webp",
      nombre: "Tallarines Saltados",
      descripcion: "Fideos salteados con verduras y pollo al estilo criollo",
      precio: 10.00,
      slug: "plato-principal-02",
      imagenes: ["/tallarines-saltados-peruanos.webp"],
    },
    {
      imagen: "/lomosaltado.webp",
      nombre: "Lomo Saltado ",
      descripcion: " Carne salteada con cebolla + arroz + tomate + papas fritas",
      precio: 10.00,
      slug: "plato-principal-03",
      imagenes: ["/lomosaltado.webp"],
    },
    {
      imagen: "/lomo-a-lo-pobre-perfil.webp",
      nombre: "Bistec a lo Pobre",
      descripcion: "Filete de res con arroz + plátano frito + papa fritas + huevo",
      precio: 10.00,
      slug: "plato-principal-04",
      imagenes: ["/lomo-a-lo-pobre-perfil.webp"],
    },
    {
      imagen: "/Bros-Chaufa.webp",
      nombre: "Pollo Broaster",
      descripcion: "Pollo crujiente con papas fritas + arroz chaufa",
      precio: 10.00,
      slug: "plato-principal-05",
      imagenes: ["/Bros-Chaufa.webp"],
    },
    {
      imagen: "/polloplancha.webp",
      nombre: "Pollo a la Plancha",
      descripcion: "Filete de pollo a la plancha con papas fritas + arroz",
      precio: 10.00,
      slug: "plato-principal-06",
      imagenes: ["/polloplancha.webp"],
    },
    {
      imagen: "/arroz_cubana.webp",
      nombre: "Arroz a la Cubana",
      descripcion: "Arroz blanco con plátano frito + huevo",
      precio: 8.00,
      slug: "plato-principal-07",
      imagenes: ["/arroz_cubana.webp "],
    },
    {
      imagen: "/tortilla-de-verduras-foto-principal.webp",
      nombre: "Tortilla de Verduras",
      descripcion: "Mezcla ligera de huevos + verduras arroz",
      precio: 7.00,
      slug: "plato-principal-08",
      imagenes: ["/tortilla-de-verduras-foto-principal.webp"],
    },

    {
      imagen: "/salchihuevo.webp",
      nombre: "Salchihuevo",
      descripcion: "Papas fritas + Salchicha + Huevo frito o revuelto",
      precio: 10.00,
      slug: "plato-principal-09",
      imagenes: ["/salchihuevo.webp"],
    },
    {
      imagen: "/salchibroaster-1.webp",
      nombre: "Salchibroster",
      descripcion: "Papas fritas + Salchicha + Pollo broster.",
      precio: 12.00,
      slug: "plato-principal-10",
      imagenes: ["/salchibroaster-1.webp"],
    },
  ],
  desayunos: [
    {
      imagen: "/pan-con-lomo.jpg",
      nombre: "Pan con Lomo",
      descripcion: "",
      precio: 3.0,
      slug: "lomo",
      imagenes: ["/pan-con-lomo.jpg",],
    },
    {
      imagen: "/pan-con-queso-jama-fusion.webp",
      nombre: "Pan con Queso",
      descripcion: "",
      precio: 3.0,
      slug: "queso",
      imagenes: ["/pan-con-queso-jama-fusion.webp",],
    },
    {
      imagen: "/huevi.jpg",
      nombre: "Pan con Huevo",
      descripcion: "",
      precio: 3,
      slug: "Huevo",
      imagenes: ["/huevi.jpg", ],
    },
    {
      imagen: "/tortilla-casera-de-achicoria.jpg",
      nombre: "Pan con Tortilla",
      descripcion: "",
      precio: 3.0,
      slug: "tortilla",
      imagenes: ["/tortilla-casera-de-achicoria.jpg",],
    },
    {
      imagen: "/pan.webp",
      nombre: "Pan con papas fritas y huevo rebozado",
      descripcion: "",
      precio: 3.0,
      slug: "papas",
      imagenes: ["/pan.webp", ],
    },
    {
      imagen: "/jamon.jpg",
      nombre: "Pan con Jamon",
      descripcion: "",
      precio: 3.0,
      slug: "jamon",
      imagenes: ["/jamon.jpg",],
    },
    // ...otros productos
  ],
  productos: [
    {
      imagen: "/categorias02.jpg",
      nombre: "Producto ",
      descripcion: "Descripción del Producto A, de alta calidad.",
      precio: 10.0,
      slug: "producto-a",
      imagenes: ["/categorias02.jpg", "/categorias03.jpeg"],
    },
    // ...otros productos
  ],
};
