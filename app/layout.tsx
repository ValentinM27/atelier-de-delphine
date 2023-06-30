import "./globals.css";
import { Inter } from "next/font/google";

// Import des composants
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
          <Footer />
        </div>
      </body>
    </html>
  );
}
