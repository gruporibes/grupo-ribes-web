import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Coloque a URL oficial que a Vercel gerou para você (sem barra no final):
  metadataBase: new URL("https://SEU-PROJETO.vercel.app"),

  title: `${siteConfig.name} | Desenvolvimento de Software & Automação de ERPs`,
  description: siteConfig.description,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: `${siteConfig.name} | Tecnologia Sob Medida`,
    description: siteConfig.description,
    url: "https://https://grupo-ribes-web.vercel.app",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Busca direto em public/og-image.png
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Tecnologia Sob Medida`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
