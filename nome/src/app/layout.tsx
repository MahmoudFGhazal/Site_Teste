import "./globals.css";

import { Header } from '../components/header/header'
import { Metadata } from "next";

import capa from '@/../public/assets/Capa.png'

//Ler sobre robots
export const metadata: Metadata = {
  title: "Nome do Site",
  description: "Site para Pokemon Pocket TCG",
  openGraph:{
    title: 'Nome do Site',
    images: [{url: capa.src}],
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
