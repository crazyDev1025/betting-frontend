"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { AppProvider } from "@/context/useAppContext";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ch">
      <body className={`${inter.className} w-full overflow-y-scroll  overflow-x-hidden bg-[url('/images/bets/backall.svg')] bg-cover bg-center bg-no-repeat `}>
      <AppProvider>
        <Header/>
        {children}
        <Footer/>
      </AppProvider>
      </body>
    </html>
  );
}
