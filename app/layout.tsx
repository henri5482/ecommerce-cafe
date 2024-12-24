"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Preload from "@/components/preload";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "@fontsource/bebas-neue";
import { Urbanist } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Restaurante LUROMY | Menus en Huamanga y Aeropuerto Ayacucho</title>
        <meta
          name="description"
          content="Restaurante LUROMY ofrece las mejores  menús en Huamanga, Ayacucho. Visítanos cerca del Aeropuerto Nacional Alfredo Mendívil Duarte."
        />
        <meta name="keywords" content="Restaurante LUROMY, Huamanga, Ayacucho, menus, Aeropuerto Nacional Alfredo Mendívil Duarte" />
        <link rel="icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Restaurante LUROMY | Menus",
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
                "https://www.facebook.com/tu-pagina",
                "https://www.instagram.com/tu-pagina",
                "https://twitter.com/tu-pagina"
              ],
            }),
          }}
        />
      </head>
      <body className={urbanist.className}>
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
          {loading ? (
            <Preload />
          ) : (
            <>
              <Navbar />
              {children}
              <Toaster />
              <Footer />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
