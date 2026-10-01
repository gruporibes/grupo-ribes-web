import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteConfig.name} | Desenvolvimento de Software & Automação de ERPs`,
  description: siteConfig.description,
  icons: {
    icon: "/logo.svg",
  },
  // Adiciona a prévia para WhatsApp, LinkedIn e Google:
  openGraph: {
    title: `${siteConfig.name} | Tecnologia Sob Medida`,
    description: siteConfig.description,
    url: "https://gruporibes.com",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
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
