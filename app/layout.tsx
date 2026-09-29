import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impost - Marketing Klinik & Property Punya Jalur",
  description:
    "Impost membantu klinik dan developer property membangun jalur dari perhatian menjadi reservasi dan inquiry.",
  openGraph: {
    title: "Impost - Marketing Klinik & Property Punya Jalur",
    description:
      "Impost membantu klinik dan developer property membangun jalur dari perhatian menjadi reservasi dan inquiry.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHXLHN3C');`,
          }}
        />
      </head>
      <body className="min-h-full bg-impost-fifth font-sans text-impost-ink">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHXLHN3C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
