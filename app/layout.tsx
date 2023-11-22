import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hai Le Trung | DevOps Engineer",
  description: "Personal Portfolio of Hai Le Trung as a devops developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#ffffff] text-gray-950 text-center relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
