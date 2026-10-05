import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/ibm-plex-sans";
import "./globals.css";

const publicUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl ?? "http://localhost:3000"),
  title: "Аренда грузовых автомобилей без водителя | Москва",
  description:
    "LADA Largus и УАЗ Профи без залога и ограничения пробега. Аренда без водителя от одного дня, получение в Люблино.",
  robots: publicUrl ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    title: "Аренда автомобилей для грузоперевозок",
    description: "Москва и Московская область",
    type: "website",
    ...(publicUrl ? { images: [new URL("/opengraph-image", publicUrl).toString()] } : {}),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
