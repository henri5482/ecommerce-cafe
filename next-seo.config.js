import { DefaultSeo } from 'next-seo';

const SEO = {
  title: 'Restaurante LUROMY | Hamburguesas y Más',
  description: 'Bienvenido a Restaurante LUROMY, donde encontrarás las mejores hamburguesas y una variedad de delicias. Disfruta de un ambiente acogedor y de nuestro excelente servicio.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://luromy.vercel.app',
    site_name: 'Restaurante LUROMY',
    images: [
      {
        url: 'https://luromy.vercel.app/promo4.webp', // Reemplaza con la URL de tu imagen Open Graph
        width: 1200,
        height: 630,
        alt: 'Restaurante LUROMY',
      },
    ],
  },
  twitter: {
    handle: '@tuTwitterHandle', // Reemplaza con tu handle de Twitter
    site: '@tuTwitterHandle', // Reemplaza con tu handle de Twitter
    cardType: 'summary_large_image',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
