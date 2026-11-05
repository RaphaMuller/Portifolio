import type { Metadata, Viewport } from "next";
import { Audiowide, Bangers, Comic_Neue, Bebas_Neue, Mouse_Memoirs } from "next/font/google";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
  display: "swap",
});

const mouseMemoirs = Mouse_Memoirs({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mouse-memoirs",
  display: "swap",
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide-next",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Portfólio | Desenvolvedor",
  description:
    "Portfólio de desenvolvimento em formato de história em quadrinhos",
  icons: {
    icon: "/logo-r.jpg",
    shortcut: "/logo-r.jpg",
    apple: "/logo-r.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bangers.variable} ${comicNeue.variable} ${bebasNeue.variable} ${mouseMemoirs.variable} ${audiowide.variable} h-full antialiased lg:scroll-smooth`}
    >
      <body className="flex min-h-full flex-col font-comic">{children}</body>
    </html>
  );
}
