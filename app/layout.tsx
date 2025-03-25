// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Célula | Comunidad de Programación en Cortazar, Gto",
  description: "Célula es una comunidad avanzada de programación ubicada en Cortazar, Guanajuato, donde estudiantes desarrollan videojuegos, software y proyectos innovadores en equipo.",
  keywords: [
    "Célula",
    "Cortazar",
    "Guanajuato",
    "programación",
    "videojuegos",
    "desarrollo de software",
    "Justo72",
    "programadores jóvenes"
  ],
  authors: [{ name: "Célula - Gen 17" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://celula.mx/",
  },
  openGraph: {
    title: "Célula | Comunidad de Programación en Cortazar, Gto",
    description: "Comunidad avanzada de programación en Cortazar, donde los estudiantes aprenden, crean y comparten proyectos tecnológicos.",
    url: "https://celula.mx/",
    siteName: "Célula",
    images: [
      {
        url: "https://celula.mx/og-image.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Célula Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Célula | Comunidad de Programación en Cortazar, Gto",
    description: "Comunidad avanzada de programación en Cortazar, donde los estudiantes aprenden, crean y comparten proyectos tecnológicos.",
    images: ["https://celula.mx/og-image.jpg"], // Replace with your actual image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="https://miguelin777.github.io/Clubdel100/assets/image/fix2.png"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E9P71GREY7"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E9P71GREY7');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}