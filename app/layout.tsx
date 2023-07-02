import { Inter } from "next/font/google";
import "./globals.css";

// SessionProvider
import { NextAuthProvider } from "./provider";

// Import des composants
import Footer from "@/components/footer";
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
    <html lang="en" className="bg-orange-200">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-orange-200">
          <div className="flex-grow flex-shrink-0">
            <Nav />
            {children}
          </div>
          <NextAuthProvider>
            <Footer />
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
