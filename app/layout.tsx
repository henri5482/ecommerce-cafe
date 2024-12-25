import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "@fontsource/bebas-neue";
import { Urbanist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Restaurante LUROMY" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Restaurante LUROMY | Menús en Huamanga y Aeropuerto Ayacucho</title>
        <meta
          name="description"
          content="Restaurante LUROMY ofrece los mejores menús en Huamanga, Ayacucho. Visítanos cerca del Aeropuerto Nacional Alfredo Mendívil Duarte."
        />
        <meta name="google-site-verification" content="s7rwNtOiZLTsTJkm10Dj-B1CNfnpkSjX7iDkXcjEVF4" />
        <meta name="keywords" content="Restaurante LUROMY, Huamanga, Ayacucho, menús, Aeropuerto Nacional Alfredo Mendívil Duarte" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://luromy.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Restaurante LUROMY | Menús en Huamanga y Aeropuerto Ayacucho" />
        <meta
          property="og:description"
          content="Disfruta de los mejores menús en Huamanga, Ayacucho. Visítanos cerca del Aeropuerto Nacional Alfredo Mendívil Duarte."
        />
        <meta property="og:url" content="https://luromy.vercel.app/" />
        <meta property="og:image" content="https://luromy.vercel.app/promo.webp" />
        <meta property="og:locale" content="es_PE" />
        
        {/* Estructura de Datos (Schema Markup) para el Restaurante */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Restaurante LUROMY | Menús",
              url: "https://luromy.vercel.app/",
              logo: "https://luromy.vercel.app/favicon.ico",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Aeropuerto Nacional Alfredo Mendívil Duarte",
                addressLocality: "Huamanga",
                addressRegion: "Ayacucho",
                postalCode: "05000",
                addressCountry: "PE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+51 918 237 837",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://wa.me/51918237837",
                "https://www.facebook.com/profile.php?id=100085413237919",
                "https://www.instagram.com/luromymenus",
                "https://twitter.com/tu-pagina",
              ],
            }),
          }}
        />
      </head>
      <body className={urbanist.className}>
      <GoogleAnalytics />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
