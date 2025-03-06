import "./globals.css"
import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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

        {children}</body>
    </html>
  )
}

