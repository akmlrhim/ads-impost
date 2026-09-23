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
  title: "Impost — Marketing Klinik & Property Punya Jalur",
  description:
    "Impost membantu klinik dan developer property membangun jalur dari perhatian menjadi reservasi dan inquiry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-impost-fifth font-sans text-impost-ink">
        {children}
      </body>
    </html>
  );
}
