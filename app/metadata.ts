import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurante LUROMY | Hamburguesas y Más",
  description: "Bienvenido a Restaurante LUROMY, donde encontrarás las mejores hamburguesas y una experiencia gastronómica inolvidable en un ambiente acogedor.",
  openGraph: {
    title: "Restaurante LUROMY | Hamburguesas y Más",
    description: "Bienvenido a Restaurante LUROMY, donde encontrarás las mejores hamburguesas y una experiencia gastronómica inolvidable en un ambiente acogedor.",
    url: "https://luromy.vercel.app/", // Reemplaza con tu dominio real
    images: [
      {
        url: "https://luromy.vercel.app/promo4.webp", // Reemplaza con la URL de tu imagen Open Graph
        width: 1200,
        height: 630,
        alt: "Los mejores platos en Restaurante LUROMY",
      },
    ],
    siteName: "Restaurante LUROMY",
    locale: "es_ES",
  },
};
