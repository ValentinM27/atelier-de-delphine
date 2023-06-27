import "./globals.css";
import { Inter } from "next/font/google";

import Nav from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "L'atelier de Delphine",
  description: "Toutes mes créations concentrées en une galerie en ligne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen bg-orange-200">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
